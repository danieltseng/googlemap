
window.onload = function(){
  $(document).ready(function(){

    document.getElementById('myVideo').addEventListener('ended',myHandler,false);
    function myHandler(e) {
       if(!e) { e = window.event; }
       // What you want to do after the event
       document.getElementById('begin').style.display="none";
       document.getElementById('word01').style.transition="all 1s ease-out";
       document.getElementById('word01').style.opacity="1";
       document.getElementById('all').style.opacity="1";
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
      vid.currentTime = window.pageYOffset/600;
  }, 110);

  $('window').on('touchmove', function(event) {
    //Prevent the window from being scrolled.
    event.preventDefault();

    //Do something like call window.scrollTo to mimic the scrolling
    //request the user made.
   });



});

$(document).ready(function(){

    // Init ScrollMagic
	var controller = new ScrollMagic.Controller();

    var pinMainScene = new ScrollMagic.Scene({
        triggerElement: '#main',
        duration: '1650',
        triggerHook: 0
    })
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'red',
    //   colorStart: '#75C695',
    //   colorEnd: 'purple'
    // }) // this requires a plugin
    .setPin('#main',{pushFollowers:false})
    .addTo(controller);

//   var pinVideoScene = new ScrollMagic.Scene({
//   	// triggerElement: '#main',
//   	triggerHook: 0 ,

//     offset:0
//   })
//   .addIndicators({
//     name: 'fade scene',
//     colorTrigger: 'red',
//     colorStart: '#75C695',
//     colorEnd: 'purple'
//   }) // this requires a plugin
//   .setClassToggle('#set-height',"fade-in")
//   .setPin('#set-height',{pushFollowers:false})
//   .addTo(controller);

//   var pinVideoScene2 = new ScrollMagic.Scene({
//     triggerElement: '#main',
//     triggerHook: 0 ,
//   duration: '1650',
//   offset:0
// })
// .addIndicators({
//   name: 'fade scene',
//   colorTrigger: 'red',
//   colorStart: '#75C695',
//   colorEnd: 'purple'
// }) // this requires a plugin
// .setClassToggle('#set-height')
// .setPin('#set-height')
// .addTo(controller);


  //bursh top intro
  var bursh_top_intro_Scene = new ScrollMagic.Scene({
    triggerElement: '#bursh-top-intro',
    triggerHook: 0.5,
  })
  // .addIndicators({
  //   name: 'fade ford0666666666666666666666666666666',
  //   colorTrigger: 'green',
  //   colorStart: 'green',
  //   colorEnd: 'pink'
  // }) // this requires a plugin
  .setClassToggle('#bursh-top-intro',"fade-in-b")
  // .setPin('#bursh-top-intro')
  .addTo(controller);



//video


  var w01Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'1400',
    offset:0
  })
  // .addIndicators({
  //   name: 'fade word0111111111111111111111111111111111',
  //   colorTrigger: 'green',
  //   colorStart: 'green',
  //   colorEnd: 'pink'
  // }) // this requires a plugin
  .setClassToggle('#word01',"fade-in-w")
  .setPin('#word01')
  .addTo(controller);

  var w01Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    offset:1400
  })
  // .addIndicators({
  //   name: 'fade word0111111111111111111111111111111111',
  //   colorTrigger: 'green',
  //   colorStart: 'green',
  //   colorEnd: 'pink'
  // }) // this requires a plugin
  .setClassToggle('#word01',"fade-in-w-o-a")
  .setPin('#word01')
  .addTo(controller);

  // var w02Scene = new ScrollMagic.Scene({
  //   triggerElement: '#main',
  //   triggerHook: 0 ,
  //   duration:'600',
  //   offset:601
  // })
  // // .addIndicators({
  // //   name: 'fade word02222222222222222222',
  // //   colorTrigger: 'green',
  // //   colorStart: 'green',
  // //   colorEnd: 'pink'
  // // }) // this requires a plugin
  // .setClassToggle('#word02',"fade-in-w")
  // .setPin('#word02')
  // .addTo(controller);

  // var w02Scene = new ScrollMagic.Scene({
  //   triggerElement: '#main',
  //   triggerHook: 0 ,
  //   duration:'600',
  //   offset:1200
  // })
  // // .addIndicators({
  // //   name: 'fade word0222222222222222222222222',
  // //   colorTrigger: 'green',
  // //   colorStart: 'green',
  // //   colorEnd: 'pink'
  // // }) // this requires a plugin
  // .setClassToggle('#word02',"fade-in-w-o")
  // .setPin('#word02')
  // .addTo(controller);







  // page01
  // var pinIntroScene = new ScrollMagic.Scene({
  // 	triggerElement: '#page01',
  // 	triggerHook: 0 ,
  //
  // })
  // .addIndicators({
  //   name: 'fade scene',
  //   colorTrigger: 'red',
  //   colorStart: '#75C695',
  //   colorEnd: 'purple'
  // }) // this requires a plugin
  // .setPin('#main',{pushFollowrs:false})
  // .addTo(controller);

	// loop through each .project element
	// $('.project').each(function(){
  //
	// 	// build a scene
	// 	var ourScene = new ScrollMagic.Scene({
	// 		triggerElement: this.children[0],
  //     duration:5,
	// 		triggerHook: 0,
  //     offset:5++
	// 	})
	// 	.setClassToggle(this, 'fade-in') // add class to project01
	// 	.addIndicators({
	// 		name: 'fade scene',
	// 		colorTrigger: 'black',
	// 		colorStart: '#75C695',
	// 		colorEnd: 'pink'
	// 	}) // this requires a plugin
	// 	.addTo(controller);
  //
	// });


    });


};
