class PowerUp extends FisicsBody {
	constructor() {
		//FisicsBody
		let limitedX = floor(random(200, width - 200));
		let limitedY = floor(random(175, height - 175));
		super(limitedX, limitedY, 100, 100, 0,0);


		this.types = ['bigP', 'miniP', 'bigB', 'miniB', 'invert'];
		this.type = this.types[floor(random(this.types.length))];
	}
	draw() {
		circle(this.pos.x, this.pos.y, this.width);
	}

	collide() {
		if (this.collision(bola)) {
			switch (this.type) {
				case 'bigP':
					bola.lastTouched.height += 100;
					break;
				case 'miniP':
					bola.lastTouched.height -= 100;
					if (bola.lastTouched.height < 60)
						bola.lastTouched.height = 60;
					break;
				case 'bigB':
					bola.width += 50;
					bola.height += 50;
					break;
				case 'miniB':
					bola.width -= 50;
					if (bola.width < 50) {
						bola.width = 50;
						bola.heigth = 50;
					}
					break;
				case 'invert':
					bola.lastTouched.controls = bola.lastTouched.controls.reverse();
					break;
			}
			powerup = new PowerUp();
			return true;
		}
		return false;
	}
}