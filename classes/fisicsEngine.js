class FisicsBody {
	constructor(x, y, w, h, sx, sy) {
		this.pos = createVector(x, y);
		this.width = w;
		this.height = h;
		this.speed = createVector(sx, sy);

	}
	drawHitBox(){
		push();
			noFill();
			stroke(0,255,0);
			
			rect(this.pos.x,this.pos.y,this.width,this.height);
		pop();
	}

	distanceToObj(obj) {
		//Si hay collision devuelve -1
		if (this.collision(obj)) {
			return -1;
		}
		let distX = Math.max(0, abs((this.pos.x + (this.width / 2)) - (obj.pos.x + (obj.width / 2))) - (this.width / 2) - (obj.width / 2));
		let distY = Math.max(0, abs((this.pos.y + (this.height / 2)) - (obj.pos.y + (obj.height / 2))) - (this.height / 2) - (obj.height / 2));

		return Math.sqrt(distX ** 2 + distY ** 2);
	}
	distanceToPoint(x, y) {
		//Si hay collision devuelve -1
		if (this.pointCollision(x, y, this)) {
			return -1;
		}

		let distX = Math.max(0, abs((this.pos.x + (this.width / 2)) - x) - (this.width / 2));
		let distY = Math.max(0, abs((this.pos.y + (this.height / 2)) - y) - (this.height / 2));

		return Math.sqrt(distX ** 2 + distY ** 2);
	}

	collision(...objs) {
		for (const obj of objs) {
			if (this.pos.y + this.height > obj.pos.y &&
				this.pos.y < obj.pos.y + obj.height &&
				this.pos.x + this.width > obj.pos.x &&
				this.pos.x < obj.pos.x + obj.width) {
				return true;
			}
		}
		return false;
	}
	placeCollision(x, y, ...objs) {
		for (const obj of objs) {
			if (y + this.height > obj.pos.y &&
				y < obj.pos.y + obj.height &&
				x + this.width > obj.pos.x &&
				x < obj.pos.x + obj.width) {
				return true;
			}
		}
		return false;
	}
	pointCollision(x, y, ...objs) {
		for (const obj of objs) {
			if (y > obj.pos.y &&
				y < obj.pos.y + obj.height &&
				x < obj.pos.x + obj.width &&
				x > obj.pos.x)
				return true;
		}
		return false;
	}
	lineCollision(x1, y1, x2, y2, ...objs) {
		if (this.placeCollision(x1, y1, ...objs) || this.placeCollision(x2, y2, ...objs)) return true;
		
		let path = createVector(x1-x2,y1-y2);
		let pathMag = path.mag();
		//The closer to 1 the more precise it is
		const PRECISION = 1;

		while(pathMag > 0){
			if(this.placeCollision(x2-path.x,y2-path.y,...objs)) return true;
			
			pathMag -= PRECISION;
			path.setMag(pathMag);
		}
		return false;
	}


}









