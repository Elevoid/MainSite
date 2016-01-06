var jumbotron = {
  size: 0,
  cur: 0
};

function fumbotronSelect(clkPos) {
  console.log(clkPos + " / " + jumbotron.cur);

  if(clkPos == jumbotron.cur || clkPos >= jumbotron.size) return;

  var curPage = $(".jumbotron .page:eq(" + jumbotron.cur + ")");
  var clkPage = $(".jumbotron .page:eq(" + clkPos + ")");

  $(".jumbotron .controls *:eq(" + jumbotron.cur + ")").removeClass("fa-circle").addClass("fa-circle-o");
  $(".jumbotron .controls *:eq(" + clkPos + ")").removeClass("fa-circle-o").addClass("fa-circle");

  curPage.hide();
  clkPage.show();

  jumbotron.cur = clkPos;
}

$(document).ready(function() {
  jumbotron.size = $(".jumbotron .page").length;

  $(".jumbotron .controls *").click(function() {
    fumbotronSelect($(this).index());
  });
});
