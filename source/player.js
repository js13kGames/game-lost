import { rotatePoint } from './util';

export default class Player {

	constructor() {

		this.x = 0;
		this.y = 0;
		this.vx = 0;
		this.vy = 0;
		this.radian = 0;
		this.radius = 12;
		this.speed = 0.3;
		this.friction = 0.9;
		this.colliding = false;
		this.facecolor = '#FFDABC';
		this.hoodcolor = '#FF005A';
	}

	testCollision(obj) {

		const dx = this.x - obj.x;
		const dy = this.y - obj.y;
		const distance = Math.sqrt(dx * dx + dy * dy);

		if (distance < this.radius + obj.radius) {
			this.colliding = true;
			return true;
		}

		return false;

	}

	resolveCollision(obj) {

	}

	update(game) {

		// get relevant variables
		const {keyboard, mouse} = game;

		// check for left keys
		if (keyboard.isPressed(keyboard.ARROW_LEFT) || keyboard.isPressed('a')) {
			this.vx -= this.speed;
		}

		// check for right keys
		if (keyboard.isPressed(keyboard.ARROW_RIGHT) || keyboard.isPressed('d')) {
			this.vx += this.speed;
		}

		// check for up keys
		if (keyboard.isPressed(keyboard.ARROW_UP) || keyboard.isPressed('w')) {
			this.vy -= this.speed;
		}

		// check for down keys
		if(keyboard.isPressed(keyboard.ARROW_DOWN) || keyboard.isPressed('s')){
			this.vy += this.speed;
		}

		// calculate radian
		const radian = Math.atan2(this.vy, this.vx);

		// get change
		let diff = radian - this.radian;

		if(diff < -Math.PI){
			diff += Math.PI*2;
		} else if (diff > Math.PI) {
			diff -= Math.PI*2;
		}

		// apply rotation with lerp
		this.radian += diff * 0.1;

		// update position
		this.x += this.vx;
		this.y += this.vy;

		// apply friction
		this.vx *= this.friction;
		this.vy *= this.friction;

		// reset colliding
		this.colliding = false;

		// test collision with trees
		game.trees.every(tree => {
			if(this.testCollision(tree)){
				this.resolveCollision(tree);
			}
		});
	}

	draw(game) {

		// draw circle
		game.context.fillStyle = this.hoodcolor;
		game.context.beginPath();
		game.context.arc( this.x, this.y, this.radius, 0, 2*Math.PI );
		game.context.fill();

		// draw hood
		game.context.beginPath();
		const p1 = rotatePoint(this.x, this.y, this.radian, this.x, this.y - this.radius);
		game.context.moveTo( p1.x, p1.y );
		const p2 = rotatePoint(this.x, this.y, this.radian, this.x - this.radius*2.5, this.y + Math.sin(game.frame/15)*5);
		const b1 = rotatePoint(this.x, this.y, this.radian, this.x - this.radius, this.y - this.radius);
		const b2 = rotatePoint(this.x, this.y, this.radian, this.x - this.radius, this.y - this.radius*0.5 + Math.cos(game.frame/15)*5);
		game.context.bezierCurveTo(b1.x, b1.y, b2.x, b2.y, p2.x, p2.y);
		const p3 = rotatePoint(this.x, this.y, this.radian, this.x, this.y + this.radius);
		const b3 = rotatePoint(this.x, this.y, this.radian, this.x - this.radius, this.y + this.radius*0.5 + Math.cos(game.frame/15)*5);
		const b4 = rotatePoint(this.x, this.y, this.radian, this.x - this.radius, this.y + this.radius);
		game.context.bezierCurveTo(b3.x, b3.y, b4.x, b4.y, p3.x, p3.y);
		game.context.fill();

		// draw face
		game.context.fillStyle = this.facecolor;
		game.context.beginPath();
		game.context.arc( this.x, this.y, this.radius, this.radian - 1.1, this.radian + 1.1 );
		game.context.fill();

		// draw left eye
		game.context.fillStyle = '#3981FF';
		const left = rotatePoint(this.x, this.y, this.radian, this.x + this.radius * 0.7, this.y - this.radius * 0.3);
		game.context.beginPath();
		game.context.arc( left.x, left.y, this.radius * 0.1, 0, 2*Math.PI );
		game.context.fill();

		// draw right eye
		const right = rotatePoint(this.x, this.y, this.radian, this.x + this.radius * 0.7, this.y + this.radius * 0.3);
		game.context.beginPath();
		game.context.arc(right.x, right.y, this.radius * 0.1, 0, 2*Math.PI );
		game.context.fill();

	}

}
