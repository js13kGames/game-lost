"use strict";function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var rad=function t(i,e,s,h){var a=e-h,n=i-s;return Math.atan2(a,n)},_createClass=function(){function t(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(i,e,s){return e&&t(i.prototype,e),s&&t(i,s),i}}(),KeyListener=function(){function t(){_classCallCheck(this,t),this.pressedKeys=[],document.addEventListener("keydown",this.keydown.bind(this)),document.addEventListener("keyup",this.keyup.bind(this))}return _createClass(t,[{key:"keydown",value:function t(i){this.pressedKeys[i.keyCode]=!0}},{key:"keyup",value:function t(i){this.pressedKeys[i.keyCode]=!1}},{key:"isPressed",value:function t(i){return!!this.pressedKeys[i]}}]),t}(),_createClass=function(){function t(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(i,e,s){return e&&t(i.prototype,e),s&&t(i,s),i}}(),MouseListener=function(){function t(){_classCallCheck(this,t),this.x=0,this.y=0,document.addEventListener("mousemove",this.mousemove.bind(this))}return _createClass(t,[{key:"mousemove",value:function t(i){this.x=i.clientX,this.y=i.clientY}}]),t}(),_createClass=function(){function t(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(i,e,s){return e&&t(i.prototype,e),s&&t(i,s),i}}(),Player=function(){function t(){_classCallCheck(this,t),this.x=0,this.y=0,this.vx=0,this.vy=0,this.rad=0,this.radius=10,this.speed=.5,this.friction=.9,this.colliding=!1,this.jumping=!1,this.light={fov:1,radius:300,brightness:.5}}return _createClass(t,[{key:"testCollision",value:function t(i){return this.x+this.radius>i.x&&this.x-this.radius<i.x+i.width&&this.y+this.radius>i.y&&this.y-this.radius<i.y+i.height&&(this.colliding=!0,!0)}},{key:"resolveCollision",value:function t(i){var e=1e5,s={x:0,y:0},h=this.x+this.radius-i.x,a=i.x+i.width-(this.x-this.radius),n=this.y+this.radius-i.y,r=i.y+i.height-(this.y-this.radius);h<e&&(e=h,s={x:-h,y:0}),a<e&&(e=a,s={x:a,y:0}),n<e&&(e=n,s={x:0,y:-n}),r<e&&(e=r,s={x:0,y:r}),this.x+=s.x,this.y+=s.y}},{key:"update",value:function t(i){var e=mouse.y-i.height/2,s=mouse.x-i.width/2;this.rad=Math.atan2(e,s),keyboard.isPressed(37)&&(this.vx-=this.speed),keyboard.isPressed(39)&&(this.vx+=this.speed),keyboard.isPressed(38)&&(this.vy-=this.speed),keyboard.isPressed(40)&&(this.vy+=this.speed),this.x+=this.vx,this.y+=this.vy,this.vx*=this.friction,this.vy*=this.friction,this.colliding=!1;for(var h=0;h<i.boxes.length;h++)this.testCollision(i.boxes[h])&&this.resolveCollision(i.boxes[h])}},{key:"drawLight",value:function t(i){var e=i.ctx.createRadialGradient(this.x,this.y,0,this.x,this.y,this.light.radius);e.addColorStop(0,"rgba(255,255,255,0.1)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.ctx.fillStyle=e,i.ctx.beginPath(),i.ctx.arc(this.x,this.y,this.light.radius,0,2*Math.PI),i.ctx.fill(),e.addColorStop(0,"rgba(255,255,255,"+this.light.brightness+")"),e.addColorStop(1,"rgba(255,255,255,0)"),i.ctx.fillStyle=e,i.ctx.beginPath(),i.ctx.arc(this.x,this.y,this.light.radius,this.rad-this.light.fov,this.rad+this.light.fov),i.ctx.lineTo(this.x,this.y),i.ctx.fill()}},{key:"draw",value:function t(i){i.ctx.beginPath(),i.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),i.ctx.fillStyle="rgb(255, 255, 255)",i.ctx.fill()}}]),t}(),_createClass=function(){function t(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(i,e,s){return e&&t(i.prototype,e),s&&t(i,s),i}}(),Box=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,h=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;_classCallCheck(this,t),this.x=i,this.y=e,this.width=s,this.height=h}return _createClass(t,[{key:"draw",value:function t(i){var e=4e3,s=i.player.x,h=i.player.y,a=[{x:this.x,y:this.y,rad:rad(this.x,this.y,s,h)},{x:this.x,y:this.y+this.height,rad:rad(this.x,this.y+this.height,s,h)},{x:this.x+this.width,y:this.y,rad:rad(this.x+this.width,this.y,s,h)},{x:this.x+this.width,y:this.y+this.height,rad:rad(this.x+this.width,this.y+this.height,s,h)}];a.sort(function(t,i){return t.rad-i.rad>Math.PI?-1:t.rad-i.rad<-Math.PI?1:t.rad>i.rad});var n=i.ctx.createRadialGradient(this.x+this.width/2,this.y+this.height/2,0,this.x+this.width/2,this.y+this.height/2,200);n.addColorStop(0,"rgba(0,0,0,0.9)"),n.addColorStop(1,"rgba(0,0,0,0)"),i.ctx.fillStyle=n,i.ctx.beginPath(),i.ctx.moveTo(a[0].x,a[0].y),i.ctx.lineTo(a[0].x+e*Math.cos(a[0].rad),a[0].y+e*Math.sin(a[0].rad)),i.ctx.lineTo(a[3].x+e*Math.cos(a[3].rad),a[3].y+e*Math.sin(a[3].rad)),i.ctx.lineTo(a[3].x,a[3].y),i.ctx.fill(),i.ctx.fillStyle="#000",i.ctx.fillRect(this.x,this.y,this.width,this.height)}}]),t}(),_createClass=function(){function t(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(i,e,s){return e&&t(i.prototype,e),s&&t(i,s),i}}(),Game=function(){function t(){_classCallCheck(this,t),this.c=document.getElementById("c"),this.c.width=window.innerWidth,this.c.height=window.innerHeight,this.width=this.c.width,this.height=this.c.height,this.ctx=this.c.getContext("2d"),this.ctx.fillStyle=0,this.state="PLAYING",this.ambient=0,this.boxes=[],this.player=null,this.lastTimestamp=new Date,window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}()}return _createClass(t,[{key:"loop",value:function t(){var i=new Date,e=(i-this.lastTimestamp)/1e3;this.draw(),this.update(e),this.lastTimestamp=i,requestAnimationFrame(this.loop.bind(this))}},{key:"run",value:function t(){this.new(),this.loop()}},{key:"new",value:function t(){this.player=new Player(this);for(var i=0;i<10;i++)this.boxes.push(new Box(100*i-520,100*i-490,50,100));this.boxes.push(new Box(-200,200,200,200))}},{key:"clear",value:function t(){this.ctx.clearRect(0,0,this.width,this.height),this.ctx.fillStyle="rgba( "+Math.floor(255*this.ambient)+", "+Math.floor(255*this.ambient)+", "+Math.floor(255*this.ambient)+", 1)",this.ctx.fillRect(0,0,this.width,this.height)}},{key:"update",value:function t(){this.player.update(this)}},{key:"draw",value:function t(){if(this.clear(),"MENU"===this.state)this.drawMenu();else if("PLAYING"===this.state){var i=this.width/2-this.player.x,e=this.height/2-this.player.y;this.ctx.translate(i,e),this.player.drawLight(this);for(var s=0;s<this.boxes.length;s++)this.boxes[s].draw(this);this.player.draw(this),this.ctx.translate(-i,-e)}else"PAUSED"===this.state&&this.drawPause()}},{key:"pause",value:function t(){this.state="PAUSED"}},{key:"unpause",value:function t(){this.state="PLAYING"}}]),t}(),mouse=new MouseListener,keyboard=new KeyListener,game=new Game;game.run();