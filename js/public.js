/**
 * @author      ZEUS Design - http://www.zeusdesign.com.tw
 * @copyright   Copyright (c) 2016 ZEUS Design
 */

$(function () {
  $(window).scroll (function () {
    if ($('#ad_fix').data ('show')) {
      if ($(window).scrollTop () > $('#ad_fix').data ('show')) {
        $('#ad_fix').addClass ('show');
      } else {
        $('#ad_fix').removeClass ('show');
      }
    }
  });

});