$(function () { 

  //アコーディオンメニュー
   $('nav p,nav p a[href^=#]').on('click', function() {
     $(this).next('ul').slideToggle();
     $(this).children('span').toggleClass('open');
     $('.sub-menu').not($(this).next('.sub-menu')).slideUp();
     $('nav p').children('span').not($(this).children('span')).removeClass('open');
   });
    
   // 小画面時にスライド内リンクを押した場合、一度閉じる
   $("#side a").on("click", function () {
       (window.innerWidth ? window.innerWidth : $(window).width()) <= 600 && $("#open").click()
   });
   
   // メニューを開くボタンの動作
   var text = $('.open-text');
   $("#open").click(function () {
       $('#side').toggleClass('open');
       $('#open-icon').toggleClass('close');
       $("#open").toggleClass("buttonclose");
       return false;
   });
    
});
