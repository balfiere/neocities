
$(window).on("load", function() {
    $('#wrapper').each(function (index, value) {
        if($(this).width()%2==1) $(this).width( 2*Math.round($(this).width()/2 ) ) ;
    });
});