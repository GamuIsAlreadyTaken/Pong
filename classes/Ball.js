class Ball extends FisicsBody {
	constructor(x, y, sx, sy,b) {
		//FisicsBody
		super(x, y, 20, 20, sx, sy);

		this.color = 255;
		this.lastTouched = b;
	}

	draw() {
		circle(this.pos.x, this.pos.y, this.width);

	}

	move() {
		if(this.pos.y < 0) this.speed.y = abs(this.speed.y);
		if (this.pos.y + this.height > height) this.speed.y = -abs(this.speed.y);
		
		if(this.lineCollision(this.pos.x,this.pos.y,this.pos.x+this.speed.x,this.pos.y+this.speed.y,barraL,barraR)){
			this.lastTouched = this.pos.x>width/2 ? barraR:barraL;
			this.bounce();
		}
			this.pos.x += this.speed.x;
			this.pos.y += this.speed.y;
		

		
	}
	bounce(){
		this.speed.x *= -1.1;
		this.speed.x = constrain(this.speed.x, -50,50);
		//Relaciona la distancia de la bola al medio de la pala con el impulso que se aplica a la bola
		let val = (this.pos.y + this.height/2) - (this.lastTouched.pos.y + this.lastTouched.height / 2);
		let increment = map(val, - this.lastTouched.height / 2, this.lastTouched.height / 2, -10, 10)
		this.speed.y += increment;
		this.speed.y = constrain(this.speed.y, -20, 20);
	}

	points(barra1, barra2) {
		if (this.pos.x < 0) {
			barra2.puntos++;
			this.speed = createVector(5, 0);
		}
		if (this.pos.x > width) {
			barra1.puntos++;
			this.speed = createVector(-5, 0);
		}
		if (this.pos.x > width || this.pos.x < 0) {
			this.pos.x = width / 2;
			this.pos.y = height / 2;

			barra1.height = 140;
			barra2.height = 140;
			this.width = 20;
			this.height = 20;

			barra1.speed = createVector(0, 10);
			barra2.speed = createVector(0, 10);
			barra1.controls = [83, 87];
			barra2.controls = [40, 38];

		}
	}
}