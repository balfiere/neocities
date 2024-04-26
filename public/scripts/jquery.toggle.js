  /*
  $(function () { 

   $('nav p,nav p a[href^=#]').on('click', function() {
     $(this).next('ul').slideToggle();
     $(this).children('span').toggleClass('open');
     $('.sub-menu').not($(this).next('.sub-menu')).slideUp();
     $('nav p').children('span').not($(this).children('span')).removeClass('open');
   });
    
   $("#leftcolumn a").on("click", function () {
       (window.innerWidth ? window.innerWidth : $(window).width()) <= 600 && $("#open").click()
   });
    
   $(window).resize(function() {
       var menu = $('#leftcolumn');
       (window.innerWidth ? window.innerWidth : $(window).width()) > 600 && menu.is(":hidden") && menu.attr("style", "")
   });
   
   var text = $('.open-text');
   $("#open").click(function () {
       $('#leftcolumn').toggleClass('open');
       $('#open-icon').toggleClass('close');
       if ($("#open-icon").hasClass('close')) {
           text.text('Close');
       } else {
           text.text('Menu');
       }
       return false;
   });
    
});
*/
document.getElementById("open").addEventListener("click", function () {
    document.getElementById('leftcolumn').classList.toggle('open')
    document.getElementById('open-icon').classList.toggle('close')
    return false;
  })