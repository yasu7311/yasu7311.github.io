//ハンバーガーメニュー
$(function(){
  $('.humburger-btn').on('click',function(){
    // $('.humburger-btn').toggleClass('show')
    $('.humburger-menu').toggleClass('show')
  })
  $('.header-item').on('click',function(){
    $('.humburger-menu').removeClass('show')
  })
})

// //フェードイン
// $(function () {
//   $('.skill-text,.service-item').on('inview',function(){
//     $(this).addClass('fadeIn');
//   })
//  })

// $(function(){
//   $('.skill-text,.service-item').on('inview',function(){
//     $(this).addClass('fadeIn')
//   })
// })

// //画像のスライダー
// $(function () {
//   $('.slider1').slick({
//     autoplay:true, //自動でスクロール
//     autoplaySpeed:0, //自動再生のスライド切り替えまでの時間設定
//     speed:3000, //スライドが流れるまでの時間 ミリ秒表示3000＝3秒
//     cssEase:"linear", //スライドの流れ方を等速に設定 ease-in
//     slidesToShow:5, //表示するスライドの数
//     swipe: false, //操作による切り替えをさせない
//     arrows:false, //矢印の非表示
//     responsive: [ //画面表示幅に合わせた処理
//       {
//         breakpoint: 599, //表示幅が599px以下の時
//         settings: {
//           slidesToShow:4, //表示するスライドの数
//         }
//       }
//     ]
//   })
//  })
 

// $(function () {
//   $('.slider2').slick({
//     autoplay:true,
//     autoplaySpeed:0,
//     speed:3000,
//     cssEase:"linear",
//     slidesToShow:5,
//     swipe: false,
//     arrows:false,
//     rtl: true,//逆方向にスライドさせる
//     responsive: [
//       {
//         breakpoint: 599,
//         settings: {
//           slidesToShow:4,
//         }
//       }
//     ]
//   })
//  })
 