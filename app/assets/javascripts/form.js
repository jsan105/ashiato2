$(function() {   //html読みこんでから下の記述実行 必ず記述する

  // 投稿機能ポップアップ表示（閉じる）
  // appends an "active" class to .popup and .popup-content when the "Open" button is clicked
  $(".user-box__action__post").on("click", function(){
    $(".popup-overlay, .popup-content").addClass("active");
  });

  // 投稿機能ポップアップ表示（閉じる）  できない!!
  // removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".close, #close").on("click", function(){
    $(".popup-overlay, .popup-content").removeClass("active");
  });


  // edit画面にて入力画像を表示させる
  $('#content_image').on('change', function (e) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#preview").attr('src', e.target.result);
    }
    reader.readAsDataURL(e.target.files[0]);
  });
});