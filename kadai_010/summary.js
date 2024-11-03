$(function() {

  // id属性がchange-colorの要素がクリックされたら
  $('#change-color').on('click', function(){
    // id属性がtargetの要素のcolorプロパティをredにする
    $('#target').css('color', 'red');
  });

  // id属性がrchange-textの要素がクリックされたら
  $('#change-text').on('click', function(){
    // id属性がtargetの文字を変える
    $('#target').text('Hello!');
  });

  // id属性がfade-outの要素がクリックされたら
  $('#fade-out').on('click', function(){
    // fadeout
    $('#target').fadeOut();
  });

  // id属性がfade-outの要素がクリックされたら
  $('#fade-in').on('click', function(){
    // fadein
    $('#target').fadeIn();
  });
  

});