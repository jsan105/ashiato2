$(function() {   //html読みこんでから下の記述実行 必ず記述する

  // 非同期通信
  function buildMessage(content){
    var html = `<div class="show-content">
                  <div class="content__title" >
                    ${content.title}
                  </div>
                  <div class="content__image" >
                    <img src=${content.image} width="290" height="190">
                  </div>
                </div> `
    $(".contents").prepend(html); //show-contentの親contentsクラス
    // .prepend 一番前に非同期追加
    // .append 最後に非同期追加
  }

  $('#new_content').on(`submit`, function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr(`action`);

    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(content){
      buildMessage(content) //関数呼び出し
      $('form')[0].reset(); //入力内容が消える
      $('.content-submit').prop('disabled' , false); //ボタン復活__ボタンクラスと同じクラス名を使用
      $('.contents').animate({scrollLeft: 0 }, {duration: 4000}); //横スクロール、４秒かけて左端へスクロール

      // changeColor(content)
      // return false;
    })

    .fail(function(){
      alert('未入力の項目がございます');
      $('.content-submit').prop('disabled' , false); //ボタン復活
    });
  })
})




