
  $(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();


  var pinMainScene = new ScrollMagic.Scene({
  	triggerElement: '#main',
  	triggerHook: 0 ,
    duration: '1000'
  })
  .addIndicators({
    name: 'fade scene',
    colorTrigger: 'red',
    colorStart: '#75C695',
    colorEnd: 'purple'
  }) // this requires a plugin
  .setPin('#main',{pushFollowers:false})
  .addTo(controller);

  //bursh top intro
  var bursh_top_intro_Scene = new ScrollMagic.Scene({
    triggerElement: '#bursh-top-intro',
    triggerHook: 0.5,

    
  })
  .addIndicators({
    name: 'fade ford0666666666666666666666666666666',
    colorTrigger: 'green',
    colorStart: 'green',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#bursh-top-intro',"fade-in-b")
  // .setPin('#bursh-top-intro')
  .addTo(controller);



//video

  var w01Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'149',
    offset:0
  })
  .addIndicators({
    name: 'fade word0111111111111111111111111111111111',
    colorTrigger: 'green',
    colorStart: 'green',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#word01',"fade-in-w")
  .setPin('#word01')
  .addTo(controller);

  var w01Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'150%',
    offset:149
  })
  .addIndicators({
    name: 'fade word0111111111111111111111111111111111',
    colorTrigger: 'green',
    colorStart: 'green',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#word01',"fade-in-w-o")
  .setPin('#word01')
  .addTo(controller);

  var w02Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'149',
    offset:150
  })
  .addIndicators({
    name: 'fade word02222222222222222222',
    colorTrigger: 'green',
    colorStart: 'green',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#word02',"fade-in-w")
  .setPin('#word02')
  .addTo(controller);

  var w02Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'140%',
    offset:299
  })
  .addIndicators({
    name: 'fade word0222222222222222222222222',
    colorTrigger: 'green',
    colorStart: 'green',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#word02',"fade-in-w-o")
  .setPin('#word02')
  .addTo(controller);

  

  var p01Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:0
  })
  .addIndicators({
    name: 'fade scene1',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project01',"fade-in")
  .setPin('#project01')
  .addTo(controller);

  var p02Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:10
  })
  .addIndicators({
    name: 'fade scene2',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project02',"fade-in")
  .setPin('#project02')
  .addTo(controller);

  var p03Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:20
  })
  .addIndicators({
    name: 'fade scene3',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project03',"fade-in")
  .setPin('#project03')
  .addTo(controller);

  var p04Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:30
  })
  .addIndicators({
    name: 'fade scene4',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project04',"fade-in")
  .setPin('#project04')
  .addTo(controller);

  var p05Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:40
  })
  .addIndicators({
    name: 'fade scene5',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project05',"fade-in")
  .setPin('#project05')
  .addTo(controller);

  var p06Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:50
  })
  .addIndicators({
    name: 'fade scene4',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project06',"fade-in")
  .setPin('#project06')
  .addTo(controller);

  var p07Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:60
  })
  .addIndicators({
    name: 'fade scene7',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project07',"fade-in")
  .setPin('#project07')
  .addTo(controller);

  var p08Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:70
  })
  .addIndicators({
    name: 'fade scene8',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project08',"fade-in")
  .setPin('#project08')
  .addTo(controller);

  var p09Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:80
  })
  .addIndicators({
    name: 'fade scene9',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project09',"fade-in")
  .setPin('#project09')
  .addTo(controller);

  var p10Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:90
  })
  .addIndicators({
    name: 'fade scene1000000000000',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project10',"fade-in")
  .setPin('#project10')
  .addTo(controller);

  var p11Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:100
  })
  .addIndicators({
    name: 'fade scene11',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project11',"fade-in")
  .setPin('#project11')
  .addTo(controller);

  var p12Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:110
  })
  .addIndicators({
    name: 'fade scene12',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project12',"fade-in")
  .setPin('#project12')
  .addTo(controller);

  var p13Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:120
  })
  .addIndicators({
    name: 'fade scene13',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project13',"fade-in")
  .setPin('#project13')
  .addTo(controller);

  var p14Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:130
  })
  .addIndicators({
    name: 'fade scene14',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project14',"fade-in")
  .setPin('#project14')
  .addTo(controller);

  var p15Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:140
  })
  .addIndicators({
    name: 'fade scene15',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project15',"fade-in")
  .setPin('#project15')
  .addTo(controller);

  var p16Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:150
  })
  .addIndicators({
    name: 'fade scene16',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project16',"fade-in")
  .setPin('#project16')
  .addTo(controller);

  var p17Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:160
  })
  .addIndicators({
    name: 'fade scene17',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project17',"fade-in")
  .setPin('#project17')
  .addTo(controller);

  var p18Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:170
  })
  .addIndicators({
    name: 'fade scene18',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project18',"fade-in")
  .setPin('#project18')
  .addTo(controller);

  var p19Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:180
  })
  .addIndicators({
    name: 'fade scene19',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project19',"fade-in")
  .setPin('#project19')
  .addTo(controller);

  var p20Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:190
  })
  .addIndicators({
    name: 'fade scene200000000000',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project20',"fade-in")
  .setPin('#project20')
  .addTo(controller);

  var p21Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:200
  })
  .addIndicators({
    name: 'fade scene21',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project21',"fade-in")
  .setPin('#project21')
  .addTo(controller);

  var p22Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:210
  })
  .addIndicators({
    name: 'fade scene22',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project22',"fade-in")
  .setPin('#project22')
  .addTo(controller);

  var p23Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:220
  })
  .addIndicators({
    name: 'fade scene23',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project23',"fade-in")
  .setPin('#project23')
  .addTo(controller);

  var p24Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:230
  })
  .addIndicators({
    name: 'fade scene24',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project24',"fade-in")
  .setPin('#project24')
  .addTo(controller);

  var p25Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:240
  })
  .addIndicators({
    name: 'fade scene25',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project25',"fade-in")
  .setPin('#project25')
  .addTo(controller);

  var p26Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:250
  })
  .addIndicators({
    name: 'fade scene26',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project26',"fade-in")
  .setPin('#project26')
  .addTo(controller);

  var p27Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:260
  })
  .addIndicators({
    name: 'fade scene27',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project27',"fade-in")
  .setPin('#project27')
  .addTo(controller);

  var p28Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:270
  })
  .addIndicators({
    name: 'fade scene28',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project28',"fade-in")
  .setPin('#project28')
  .addTo(controller);

  var p29Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:280
  })
  .addIndicators({
    name: 'fade scene29',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project29',"fade-in")
  .setPin('#project29')
  .addTo(controller);

  var p30Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:290
  })
  .addIndicators({
    name: 'fade scene30',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project30',"fade-in")
  .setPin('#project30')
  .addTo(controller);

  var p31Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:300
  })
  .addIndicators({
    name: 'fade scene30',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project31',"fade-in")
  .setPin('#project31')
  .addTo(controller);

  var p32Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:310
  })
  .addIndicators({
    name: 'fade scene32',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project32',"fade-in")
  .setPin('#project32')
  .addTo(controller);

  var p33Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:320
  })
  .addIndicators({
    name: 'fade scene33',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project33',"fade-in")
  .setPin('#project33')
  .addTo(controller);

  var p34Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:330
  })
  .addIndicators({
    name: 'fade scene34',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project34',"fade-in")
  .setPin('#project34')
  .addTo(controller);

  var p35Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:340
  })
  .addIndicators({
    name: 'fade scene35',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project35',"fade-in")
  .setPin('#project35')
  .addTo(controller);

  var p36Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:350
  })
  .addIndicators({
    name: 'fade scene36',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project36',"fade-in")
  .setPin('#project36')
  .addTo(controller);

  var p37Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:360
  })
  .addIndicators({
    name: 'fade scene37',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project37',"fade-in")
  .setPin('#project37')
  .addTo(controller);

  var p38Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:370
  })
  .addIndicators({
    name: 'fade scene38',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project38',"fade-in")
  .setPin('#project38')
  .addTo(controller);

  var p39Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:380
  })
  .addIndicators({
    name: 'fade scene39',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project39',"fade-in")
  .setPin('#project39')
  .addTo(controller);

  var p40Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:390
  })
  .addIndicators({
    name: 'fade scene40',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project40',"fade-in")
  .setPin('#project40')
  .addTo(controller);

  var p41Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:400
  })
  .addIndicators({
    name: 'fade scene41',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project41',"fade-in")
  .setPin('#project41')
  .addTo(controller);

  var p42Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:410
  })
  .addIndicators({
    name: 'fade scene42',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project42',"fade-in")
  .setPin('#project42')
  .addTo(controller);

  var p43Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:420
  })
  .addIndicators({
    name: 'fade scene43',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project43',"fade-in")
  .setPin('#project43')
  .addTo(controller);

  var p44Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:430
  })
  .addIndicators({
    name: 'fade scene44',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project44',"fade-in")
  .setPin('#project44')
  .addTo(controller);

  var p45Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:440
  })
  .addIndicators({
    name: 'fade scene45',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project45',"fade-in")
  .setPin('#project45')
  .addTo(controller);

  var p46Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:450
  })
  .addIndicators({
    name: 'fade scene46',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project46',"fade-in")
  .setPin('#project46')
  .addTo(controller);

  var p47Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:460
  })
  .addIndicators({
    name: 'fade scene47',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project47',"fade-in")
  .setPin('#project47')
  .addTo(controller);

  var p48Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:470
  })
  .addIndicators({
    name: 'fade scene48',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project48',"fade-in")
  .setPin('#project48')
  .addTo(controller);

  var p49Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:480
  })
  .addIndicators({
    name: 'fade scene49',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project49',"fade-in")
  .setPin('#project49')
  .addTo(controller);

  var p50Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:490
  })
  .addIndicators({
    name: 'fade scene50',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project50',"fade-in")
  .setPin('#project50')
  .addTo(controller);

  var p51Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:500
  })
  .addIndicators({
    name: 'fade scene51',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project51',"fade-in")
  .setPin('#project51')
  .addTo(controller);

  var p52Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:510
  })
  .addIndicators({
    name: 'fade scene52',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project52',"fade-in")
  .setPin('#project52')
  .addTo(controller);

  var p53Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:520
  })
  .addIndicators({
    name: 'fade scene53',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project53',"fade-in")
  .setPin('#project53')
  .addTo(controller);

  var p54Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:530
  })
  .addIndicators({
    name: 'fade scene54',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project54',"fade-in")
  .setPin('#project54')
  .addTo(controller);

  var p55Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:540
  })
  .addIndicators({
    name: 'fade scene55',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project55',"fade-in")
  .setPin('#project55')
  .addTo(controller);

  var p56Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:550
  })
  .addIndicators({
    name: 'fade scene56',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project56',"fade-in")
  .setPin('#project56')
  .addTo(controller);

  var p57Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:560
  })
  .addIndicators({
    name: 'fade scene57',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project57',"fade-in")
  .setPin('#project57')
  .addTo(controller);

  var p58Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:570
  })
  .addIndicators({
    name: 'fade scene58',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project58',"fade-in")
  .setPin('#project58')
  .addTo(controller);

  var p59Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:580
  })
  .addIndicators({
    name: 'fade scene59',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project59',"fade-in")
  .setPin('#project59')
  .addTo(controller);

  var p60Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:590
  })
  .addIndicators({
    name: 'fade scene60',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project60',"fade-in")
  .setPin('#project60')
  .addTo(controller);

  var p61Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:600
  })
  .addIndicators({
    name: 'fade scene61',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project61',"fade-in")
  .setPin('#project61')
  .addTo(controller);

  var p62Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:610
  })
  .addIndicators({
    name: 'fade scene62',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project62',"fade-in")
  .setPin('#project62')
  .addTo(controller);

  var p63Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:620
  })
  .addIndicators({
    name: 'fade scene63',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project63',"fade-in")
  .setPin('#project63')
  .addTo(controller);

  var p64Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:630
  })
  .addIndicators({
    name: 'fade scene64',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project64',"fade-in")
  .setPin('#project64')
  .addTo(controller);

  var p65Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:640
  })
  .addIndicators({
    name: 'fade scene65',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project65',"fade-in")
  .setPin('#project65')
  .addTo(controller);

  var p66Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:650
  })
  .addIndicators({
    name: 'fade scene66',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project66',"fade-in")
  .setPin('#project66')
  .addTo(controller);

  var p67Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:660
  })
  .addIndicators({
    name: 'fade scene67',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project67',"fade-in")
  .setPin('#project67')
  .addTo(controller);

  var p68Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:670
  })
  .addIndicators({
    name: 'fade scene68',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project68',"fade-in")
  .setPin('#project68')
  .addTo(controller);

  var p69Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:680
  })
  .addIndicators({
    name: 'fade scene69',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project69',"fade-in")
  .setPin('#project69')
  .addTo(controller);

  var p70Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:690
  })
  .addIndicators({
    name: 'fade scene70',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project70',"fade-in")
  .setPin('#project70')
  .addTo(controller);

  var p71Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:700
  })
  .addIndicators({
    name: 'fade scene71',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project71',"fade-in")
  .setPin('#project71')
  .addTo(controller);

  var p72Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:710
  })
  .addIndicators({
    name: 'fade scene72',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project72',"fade-in")
  .setPin('#project72')
  .addTo(controller);

  var p73Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:720
  })
  .addIndicators({
    name: 'fade scene73',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project73',"fade-in")
  .setPin('#project73')
  .addTo(controller);

  var p74Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:730
  })
  .addIndicators({
    name: 'fade scene74',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project74',"fade-in")
  .setPin('#project74')
  .addTo(controller);

  var p75Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:740
  })
  .addIndicators({
    name: 'fade scene75',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project75',"fade-in")
  .setPin('#project75')
  .addTo(controller);

  var p76Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:750
  })
  .addIndicators({
    name: 'fade scene76',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project76',"fade-in")
  .setPin('#project76')
  .addTo(controller);

  var p77Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:760
  })
  .addIndicators({
    name: 'fade scene77',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project77',"fade-in")
  .setPin('#project77')
  .addTo(controller);

  var p78Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:770
  })
  .addIndicators({
    name: 'fade scene78',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project78',"fade-in")
  .setPin('#project78')
  .addTo(controller);

  var p79Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:780
  })
  .addIndicators({
    name: 'fade scene79',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project79',"fade-in")
  .setPin('#project79')
  .addTo(controller);

  var p80Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:790
  })
  .addIndicators({
    name: 'fade scene80',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project80',"fade-in")
  .setPin('#project80')
  .addTo(controller);

  var p81Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:800
  })
  .addIndicators({
    name: 'fade scene81',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project81',"fade-in")
  .setPin('#project81')
  .addTo(controller);

  var p82Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:810
  })
  .addIndicators({
    name: 'fade scene82',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project82',"fade-in")
  .setPin('#project82')
  .addTo(controller);

  var p83Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:820
  })
  .addIndicators({
    name: 'fade scene83',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project83',"fade-in")
  .setPin('#project83')
  .addTo(controller);

  var p84Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:830
  })
  .addIndicators({
    name: 'fade scene84',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project84',"fade-in")
  .setPin('#project84')
  .addTo(controller);

  var p85Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:840
  })
  .addIndicators({
    name: 'fade scene85',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project85',"fade-in")
  .setPin('#project85')
  .addTo(controller);

  var p86Scene = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0 ,
    duration:'10',
    offset:850
  })
  .addIndicators({
    name: 'fade scene86',
    colorTrigger: 'black',
    colorStart: 'red',
    colorEnd: 'pink'
  }) // this requires a plugin
  .setClassToggle('#project86',"fade-in")
  .setPin('#project86')
  .addTo(controller);





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
