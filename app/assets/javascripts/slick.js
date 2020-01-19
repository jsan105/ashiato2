$(function(){
  $(".slider").slick({
  infinite: true, //スライドのループ有効化
  autoplay:true,     //自動再生
  autoplaySpeed: 0, //待ち時間を０に
  speed: 15000,     //自動再生の速度
  pauseOnHover: false,
  cssEase: 'linear',// 切り替えイージングを'linear'に
  
  //ここにオプションを書いていく
  arrows:false
  });
});