/**
 * @author      ZEUS Design - http://www.zeusdesign.com.tw
 * @copyright   Copyright (c) 2016 ZEUS Design
 */

$(function () {
  // 開啟一個 其他關閉，要的話設定 true，不要 false
  var oneOpen = true;

  // 這裡就看你怎麼命名就改就好
  $('#accordion .page').each (function () {
    // 內容不用看
    $(this).data ('height', $(this).outerHeight ());
    $(this).get (0).$span = $(this).find ('>span');

    
    $(this).get (0).run = function () {
      if ($(this).hasClass ('show')) $(this).css ({ height: $(this).data ('height') }) && $(this).hasClass ('show') && oneOpen && $(this).siblings ().removeClass ('show').each (function () { if ($(this).get (0).$span) $(this).css ({ height: $(this).get (0).$span.outerHeight (true) }); });
      else $(this).css ({ height: $(this).get (0).$span.outerHeight (true) });
    }.bind ($(this));

    $(this).get (0).$span.click (function () {
      if ($(this).hasClass ('show')) $(this).removeClass ('show');
      else $(this).addClass ('show');
      $(this).get (0).run ();
    }.bind ($(this)));
    
    $(this).get (0).run ();
  });
});