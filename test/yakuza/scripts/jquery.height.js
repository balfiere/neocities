// インラインフレームの高さを決定

$(window).on("load resize", function () {
    var w = window.innerWidth ? window.innerWidth : $(window).width(),
        b = $("#wrapper").height(),
        h = $("header").outerHeight(true),
        f = $("footer").outerHeight(true),
        l = $(".line").outerHeight(true);
  if (768 <=  w) {// windowの幅が768以上の時のインラインフレームの高さ
    $("#rightcolumn,#leftcolumn").css("height", "100%");
  } else {// windowの幅が768以下の時
    $("#rightcolumn").css("height", b - h - f - (l * 2) + "px");
    $("#leftcolumn").css("height", "100%");
  }
});

