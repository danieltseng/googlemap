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

    document.getElementById('myVideo').addEventListener('ended',myHandler,false);
    function myHandler(e) {
       if(!e) { e = window.event; }
       // What you want to do after the event
       document.getElementById('myVideo').style.display="none";
       document.getElementById('videoEnd').style.display="opacity=1";
    }

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
      vid.currentTime = window.pageYOffset/800;
  }, 100);

  $('window').on('touchmove', function(event) {
    //Prevent the window from being scrolled.
    event.preventDefault();

    //Do something like call window.scrollTo to mimic the scrolling
    //request the user made.
   });



  };
