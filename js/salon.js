//ハンバーガーメニュー
$(function(){
  $('.hamburger-btn').on('click',function(){
    $('.hamburger-btn, .hamburger-menu').toggleClass('show')
  })
  // $('.hamburger-btn').on('click',function(){
  //   $('.hamburger-menu').toggleClass('show')
  // })
  $('.header-item').on('click',function(){
    $('.hamburger-btn, .hamburger-menu').removeClass('show')
  })
})

//フェードイン
$(function () {
  $('.skill-text,.service-item').on('inview',function(){
    $(this).addClass('fadeIn');
  })
 })

// スライダー
$(function(){
  $('.slider').slick({
    autoplay:true,
    autoplaySpeed:8000,
    speed:1500,
    dots:true,
  });
});

// ページトップ

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