/**
 * Frame-by-frame video animation with ScrollMagic and GSAP
 *
 * Note that your web server must support byte ranges (most do).
 * Otherwise currentTime will always be 0 in Chrome.
 * See here: http://stackoverflow.com/a/5421205/950704
 * and here: https://bugs.chromium.org/p/chromium/issues/detail?id=121765
 */
window.onload = function(){
    // your code

    // select video element
  var vid = document.getElementById('v0');
  //var vid = $('#v0')[0]; // jquery option

  // pause video on load
  vid.pause();

  // pause video on document scroll (stops autoplay once scroll started)
  window.onscroll = function(){
      vid.pause();
  };

  // refresh video frames on interval for smoother playback
  setInterval(function(){
      vid.currentTime = window.pageYOffset/1200;
  }, 180);

  $('window').on('touchmove', scroll);
  };
