$(window).on("load resize", function () {
    $("#wrapper").css("width", "90%");
    $('#wrapper').each(function (index, value) {
        if($(this).width()%4!=0) $(this).width( 4*Math.round($(this).width()/4 ) ) ;
    });
})