// let c, canvas;

// const Vector2 = (x = 0, y = x) => ({ x, y });

// class Circle {
// 	constructor() {
// 		this.position  = Vector2(canvas.width / 2, canvas.height / 2);
// 		this.direction = Vector2(1, 1);

// 		this.speed = 1;
// 	}

// 	update() {
// 		this.position.x += this.speed;
// 		this.position.y += this.speed;

// 		if (this.position.x >= canvas.width || this.position.x <= 0) {
// 			this.direction.x *= -1;
// 		}

// 		if (this.position.y >= canvas.height || this.position.y <= 0) {
// 			this.direction.y *= -1;
// 		}
// 	}

// 	render() {
// 		c.fillStyle = "green";
// 		c.arc(this.position.x, this.position.y, 10, 0, Math.PI * 2);
// 		c.fill();
// 	}
// }

// let circle;

// export const setup = (ctx, gameCanvas) => {
// 	c      = ctx;
// 	canvas = gameCanvas;

// 	circle = new Circle();
// };

// export const update = () => {
// 	c.clearRect(0, 0, canvas.width, canvas.height);

// 	circle.update();
// 	circle.render();
// };
