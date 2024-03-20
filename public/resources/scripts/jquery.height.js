// インラインフレームの高さを決定

$(window).on("load resize", function () {
    var w = window.innerWidth ? window.innerWidth : $(window).width(),
        b = $("#wrapper").height(),
        h = $("header").outerHeight(true),
        f = $("footer").outerHeight(true);
  if (600 <=  w) {// windowの幅が600以上の時のインラインフレームの高さ
    $("#rightcolumn,#leftcolumn").css("height", b - h - f + "px");
  } else {// windowの幅が600以下の時
    $("#rightcolumn").css("height", b - h - f + "px");
    $("#leftcolumn").css("height", "100%");
  }
});
