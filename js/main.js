//ハンバーガーメニュー
$(function(){
  $('.hamburger-btn').on('click',function(){
    $('.hamburger-btn, .hamburger-menu').toggleClass('show')
    // $('.hamburger-menu').toggleClass('show')
  });
  $('.header-item').on('click',function(){
    $('.hamburger-btn, .hamburger-menu').removeClass('show')
  });
});

$(function(){
  const pageTop = $("#page-top");
  pageTop.hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.on("click",function() {
    $("body,html").animate(
      {
        scrollTop:0,
      },
      500
    );
    return false;
  });
});