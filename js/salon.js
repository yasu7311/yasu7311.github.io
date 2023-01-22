//ハンバーガーメニュー
$(function(){
  $('.humburger-btn').on('click',function(){
    $('.humburger-btn, .humburger-menu').toggleClass('show')
  })
  // $('.humburger-btn').on('click',function(){
  //   $('.humburger-menu').toggleClass('show')
  // })
  $('.header-item').on('click',function(){
    $('.humburger-btn, .humburger-menu').removeClass('show')
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