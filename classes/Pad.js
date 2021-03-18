
class Pad extends FisicsBody {

	constructor(x, y, controls) {
		//FisicsBody
		super(x, y, 40, 140, 0, 10);


		this.puntos = 0;
		this.controls = controls;
	}
	draw() {
		rect(this.pos.x, this.pos.y, this.width, this.height);

		//Draws the points
		text(this.puntos, this.pos.x < width / 2 ? width / 4 : 3 * width / 4, height / 2);
	}
	move() {
		if (keyIsDown(this.controls[0])) {
			this.speed.y = abs(this.speed.y);
			this.pos.y += this.speed.y;
		}
		if (keyIsDown(this.controls[1])) {
			this.speed.y = -abs(this.speed.y);
			this.pos.y += this.speed.y;
		}
		this.pos.y = constrain(this.pos.y, 0, height - this.height);
	}
}