/**
 * @author      ZEUS Design - http://www.zeusdesign.com.tw
 * @copyright   Copyright (c) 2016 ZEUS Design
 */

$(function () {
  var menu_top = $('#menu').offset ().top;
  $(window).scroll (function () {
    
    if ($(window).scrollTop () > menu_top) {
      $('#menu').addClass ('fix');
    } else {
      $('#menu').removeClass ('fix');
    }

    if (!$('#icons').hasClass ('show') && ($(window).scrollTop () + $(window).height ()) > $('#icons').offset ().top) {
      console.error ('x');
      $('#icons').addClass ('show');
    }
    if (!$('#box').hasClass ('show') && ($(window).scrollTop () + $(window).height ()) > $('#box').offset ().top) {
      $('#box').addClass ('show');
    }
    
  });

});