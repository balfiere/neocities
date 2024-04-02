$(window).on("load", function () {
    $("#wrapper").css("width", "90%");
    $('#wrapper').each(function (index, value) {
        if($(this).width()%2!=0) $(this).width( 2*Math.round($(this).width()/2 ) ) ;
    });
})