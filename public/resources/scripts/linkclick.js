$(document).ready(function(){
    $('.sidecontent').hide();
    $('.subheader').click(function() {
        $(this).closest('.sidebox').find('.sidecontent').slideToggle(500);
        return false;
    });
});