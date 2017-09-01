!function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/assets/",e(e.s=0)}([function(t,e,i){t.exports=i(1)},function(t,e,i){"use strict";var n=i(2);(new(function(t){return t&&t.__esModule?t:{default:t}}(n).default)).run()},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(3),o=n(a),h=i(4),u=n(h),l=i(6),c=n(l),d=i(7),f=n(d),y="PLAYING",v=function(){function t(){s(this,t),this.mouse=new c.default,this.keyboard=new f.default,this.width=1280,this.height=720,this.canvas=document.getElementById("c"),this.canvas.width=this.width,this.canvas.height=this.height,this.context=this.canvas.getContext("2d"),this.state=y,this.ambient=.3,this.boxes=[],this.player=null,this.lastTimestamp=new Date,window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}()}return r(t,[{key:"loop",value:function(){var t=new Date,e=(t-this.lastTimestamp)/1e3;this.draw(),this.update(e),this.lastTimestamp=t,requestAnimationFrame(this.loop.bind(this))}},{key:"run",value:function(){this.setup(),this.loop()}},{key:"setup",value:function(){this.player=new o.default(this);for(var t=0;t<1;t++)this.boxes.push(new u.default(100*t,100*t,200,200))}},{key:"clear",value:function(){this.context.clearRect(0,0,this.width,this.height),this.context.fillStyle="rgb( "+Math.round(255*this.ambient)+","+Math.round(255*this.ambient)+","+Math.round(255*this.ambient)+")",this.context.fillRect(0,0,this.width,this.height)}},{key:"update",value:function(){switch(this.state){case"MENU":break;case y:this.player.update(this)}}},{key:"draw",value:function(){switch(this.clear(),this.state){case"MENU":this.drawMenu();break;case y:var t=this.width/2-this.player.x,e=this.height/2-this.player.y;this.context.translate(t,e);for(var i=0;i<this.boxes.length;i++)this.boxes[i].draw(this);this.player.draw(this),this.context.translate(-t,-e),this.player.drawDarkness(this);break;case"PAUSED":this.drawPause()}}},{key:"pause",value:function(){this.state="PAUSED"}},{key:"unpause",value:function(){this.state="PAUSED"}}]),t}();e.default=v},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=function(){function t(){n(this,t),this.x=0,this.y=0,this.vx=0,this.vy=0,this.rad=0,this.radius=10,this.speed=.5,this.friction=.9,this.colliding=!1,this.jumping=!1,this.light={fov:1,radius:300,brightness:.5}}return s(t,[{key:"testCollision",value:function(t){return this.x+this.radius>t.x&&this.x-this.radius<t.x+t.width&&this.y+this.radius>t.y&&this.y-this.radius<t.y+t.height&&(this.colliding=!0,!0)}},{key:"resolveCollision",value:function(t){var e=1e5,i={x:0,y:0},n=this.x+this.radius-t.x,s=t.x+t.width-(this.x-this.radius),r=this.y+this.radius-t.y,a=t.y+t.height-(this.y-this.radius);n<e&&(e=n,i={x:-n,y:0}),s<e&&(e=s,i={x:s,y:0}),r<e&&(e=r,i={x:0,y:-r}),a<e&&(e=a,i={x:0,y:a}),this.x+=i.x,this.y+=i.y}},{key:"update",value:function(t){var e=t.keyboard,i=t.mouse,n=i.y-t.height/2,s=i.x-t.width/2;this.rad=Math.atan2(n,s),(e.isPressed("ArrowLeft")||e.isPressed("a"))&&(this.vx-=this.speed),(e.isPressed("ArrowRight")||e.isPressed("d"))&&(this.vx+=this.speed),(e.isPressed("ArrowUp")||e.isPressed("w"))&&(this.vy-=this.speed),(e.isPressed("ArrowDown")||e.isPressed("s"))&&(this.vy+=this.speed),this.x+=this.vx,this.y+=this.vy,this.vx*=this.friction,this.vy*=this.friction,this.colliding=!1;for(var r=0;r<t.boxes.length;r++)this.testCollision(t.boxes[r])&&this.resolveCollision(t.boxes[r])}},{key:"drawDarkness",value:function(t){var e=t.context.createRadialGradient(t.width/2,t.height/2,0,t.width/2,t.height/2,10*this.light.radius);e.addColorStop(0,"rgba(0,0,0,"+t.ambient+")"),e.addColorStop(.1,"rgba(0,0,0,1)"),t.context.fillStyle=e,t.context.fillRect(0,0,t.width,t.height)}},{key:"drawLight",value:function(t){var e=t.context.createRadialGradient(t.width/2,t.height/2,0,t.width/2,t.height/2,10*this.light.radius);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.context.fillStyle=e,t.context.beginPath(),t.context.arc(this.x,this.y,this.light.radius,this.rad-this.light.fov,this.rad+this.light.fov),t.context.lineTo(this.x,this.y),t.context.fill()}},{key:"draw",value:function(t){t.context.beginPath(),t.context.arc(this.x,this.y,this.radius,0,2*Math.PI),t.context.fillStyle="rgb(0, 0, 255)",t.context.fill()}}]),t}();e.default=r},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=i(5),a=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;n(this,t),this.x=e,this.y=i,this.width=s,this.height=r}return s(t,[{key:"draw",value:function(t){var e=t.player,i=t.context,n=e.x,s=e.y,a=this.x,o=this.y,h=this.width,u=this.height,l=[{x:a,y:o,rad:(0,r.rad)(a,o,n,s)},{x:a,y:o+u,rad:(0,r.rad)(a,o+u,n,s)},{x:a+h,y:o,rad:(0,r.rad)(a+h,o,n,s)},{x:a+h,y:o+u,rad:(0,r.rad)(a+h,o+u,n,s)}];l.sort(function(t,e){return t.rad-e.rad>Math.PI?-1:t.rad-e.rad<-Math.PI?1:t.rad>e.rad});var c=i.createRadialGradient(a+h/2,o+u/2,0,a+h/2,o+u/2,200);c.addColorStop(0,"rgba(0,0,0,"+(1-t.ambient)+")"),c.addColorStop(1,"rgba(0,0,0,0)");var d=l[0],f=l[3];i.beginPath(),i.moveTo(d.x,d.y),i.lineTo(d.x+4e3*Math.cos(d.rad),d.y+4e3*Math.sin(d.rad)),i.lineTo(f.x+4e3*Math.cos(f.rad),f.y+4e3*Math.sin(f.rad)),i.lineTo(f.x,f.y),i.fillStyle=c,i.fill();var y=.1*(a+h/2-n),v=.1*(o+u/2-s);i.beginPath(),v>0?(i.moveTo(a,o),i.lineTo(a+h,o),i.lineTo(a+h+y,o+v),i.lineTo(a+y,o+v),i.fillStyle=s>o?"#222":(0,r.calcLight)(y,v-u/2)):(i.moveTo(a,o+u),i.lineTo(a+h,o+u),i.lineTo(a+h+y,o+u+v),i.lineTo(a+y,o+u+v),i.fillStyle=s<o+u?"#222":(0,r.calcLight)(y,v+u/2)),i.fill(),i.beginPath(),y>0?(i.moveTo(a,o),i.lineTo(a+y,o+v),i.lineTo(a+y,o+u+v),i.lineTo(a,o+u),i.fillStyle=n>a?"#222":(0,r.calcLight)(y-h/2,v)):(i.moveTo(a+h,o),i.lineTo(a+h+y,o+v),i.lineTo(a+h+y,o+u+v),i.lineTo(a+h,o+u),i.fillStyle=n<a+h?"#222":(0,r.calcLight)(y+h/2,v)),i.fill(),i.fillStyle="#222",i.fillRect(a+y,o+v,h,u)}}]),t}();e.default=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.rad=function(t,e,i,n){var s=e-n,r=t-i;return Math.atan2(s,r)},e.calcLight=function(t,e){return"hsl(0,0%,"+(2*Math.sqrt(t*t+e*e)-100)+"%)"}},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=function(){function t(){n(this,t),this.x=0,this.y=0,document.addEventListener("mousemove",this.mousemove.bind(this))}return s(t,[{key:"mousemove",value:function(t){this.x=t.clientX,this.y=t.clientY}}]),t}();e.default=r},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=function(){function t(){n(this,t),this.pressedKeys=[],document.addEventListener("keydown",this.keydown.bind(this)),document.addEventListener("keyup",this.keyup.bind(this))}return s(t,[{key:"keydown",value:function(t){this.pressedKeys[t.keyCode]=!0,this.pressedKeys[t.key]=!0,this.pressedKeys[t.code]=!0}},{key:"keyup",value:function(t){this.pressedKeys[t.keyCode]=!1,this.pressedKeys[t.key]=!1,this.pressedKeys[t.code]=!1}},{key:"isPressed",value:function(t){return this.pressedKeys[t]}}]),t}();e.default=r}]);