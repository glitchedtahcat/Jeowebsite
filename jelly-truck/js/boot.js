"use strict";var orientated=!1;window.JellyTruck.state.boot={preload:function(){this.game.load.image("title","https://cdn.jsdelivr.net/gh/MopNop/jello@6fc0bb6fff02f6a562752375b847a9e4ffb50c22/jellytruck/assets/menu/title.png"),this.game.load.image("splash","https://cdn.jsdelivr.net/gh/MopNop/jello@6fc0bb6fff02f6a562752375b847a9e4ffb50c22/jellytruck/assets/Loading/splash_coolmath.png"),this.game.load.image("loadbg","https://cdn.jsdelivr.net/gh/MopNop/jello@6fc0bb6fff02f6a562752375b847a9e4ffb50c22/jellytruck/assets/Loading/loader.png"),this.game.load.image("bar","https://cdn.jsdelivr.net/gh/MopNop/jello@6fc0bb6fff02f6a562752375b847a9e4ffb50c22/jellytruck/assets/Loading/preload.png"),this.game.sound.autoplay=!0,this.game.time.advancedTiming=!0,this.game.physics.startSystem(Phaser.Physics.BOX2D),this.game.physics.box2d.useElapsedTime=!0,this.game.physics.box2d.frameRate=1/60,this.game.physics.box2d.physicsElapsed=1/60,navigator.userAgent.match(/iPhone|iPad|iPod/i)&&(this.game.physics.box2d.gravity.y=800,this.game.physics.box2d.friction=.8,this.game.physics.box2d.ptmRatio=50,this.game.physics.box2d.velocityIterations=5,this.game.physics.box2d.positionIterations=6),navigator.userAgent.match(/Android|BlackBerry|Opera Mini|IEMobile/i),this.game.physics.box2d.gravity.y=800,this.game.physics.box2d.friction=.8,this.game.physics.box2d.ptmRatio=50,this.game.physics.box2d.velocityIterations=4.5,this.game.physics.box2d.positionIterations=6,this.game.scale.pageAlignVertically=!0,this.game.scale.pageAlignHorizontally=!0,this.game.scale.forceOrientation(!0,!1),this.game.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation,this),this.game.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation,this),this.game.world.setBounds(0,0,8e3,4e3),this.enableScaling(),jt.trace||(console.log=function(){})},create:function(){for(var e in window.JellyTruck.state)this.game.state.add(e,window.JellyTruck.state[e]);var t,a;this.game.stage.backgroundColor="#000000",this.game.stage.disableVisibilityChange=!0,this.game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,this.game.device.desktop||(t=window.innerWidth)<(a=window.innerHeight)&&(document.getElementById("orientation").style.width=t+"px",document.getElementById("orientation").style.height=a+"px"),this.game.device.desktop?(this.game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,this.game.scale.minWidth=400,this.game.scale.minHeight=240,this.game.scale.maxWidth=800,this.game.scale.maxHeight=480,this.game.scale.pageAlignHorizontally=!1,this.game.scale.pageAlignVertically=!0):(this.game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,this.game.scale.minWidth=400,this.game.scale.minHeight=240,this.game.scale.maxWidth=2048,!0===(a=this).game.device.iPad?this.game.scale.maxHeight=1228:this.game.scale.maxHeight=736,this.scale.pageAlignHorizontally=!1,this.game.scale.pageAlignVertically=!0,this.game.scale.forceOrientation(!0,!1),this.game.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation,this),this.game.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation,this),this.game.scale.refresh(),this.game.scale.isLandscape?this.leaveIncorrectOrientation():this.enterIncorrectOrientation(),!this.game.scale.isLandscape||!0!==a.game.device.iPhone&&!0!==a.game.device.iPad||(this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL),window.addEventListener("orientationchange",function(){})),11===this.game.device.ieVersion&&-1!==navigator.appVersion.indexOf("Windows NT 10.0")?document.getElementById("msg").style.display="block":(document.getElementById("msg").style.display="none",this.game.state.start("load"))},enableScaling:function(){var e=this.game;e.scale.parentIsWindow=e.canvas.parentNode==document.body,e.scale.scaleMode=Phaser.ScaleManager.NO_SCALE},enterIncorrectOrientation:function(){this.game.sound.stopAll(),this.game.sound.volume=0,document.getElementById("orientation").style.width="100%",document.getElementById("orientation").style.height="100%",this.game.scale.refresh(),document.getElementById("orientation").style.display="block"},leaveIncorrectOrientation:function(){this.game.sound.stopAll(),this.game.sound.volume=.8,document.getElementById("orientation").style.display="none"},shutdown:function(){}};