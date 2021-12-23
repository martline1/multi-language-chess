import piecesAsset from "Resources/img/pieces.png";

// eslint-disable-next-line
import { PIXI } from "Resources/pixi.min";
import Loader   from "./Components/Loader";

let delta, app;

export const setup = (_app) => {
	app = _app;

	const loader = new Loader({
		pieces : piecesAsset,
	});

	loader.onComplete = () => {
		console.log({ textures : loader.textures });

		const container = new PIXI.Container();

		const kingTexture = new PIXI.Texture(loader.textures.pieces, new PIXI.Rectangle(0, 0, 100, 100));
		const kingSprite  = new PIXI.Sprite(kingTexture);

		container.addChild(kingSprite);

		app.stage.addChild(container);
	};
};

export const update =  _delta => {
	delta = _delta;
};

// class Vector2 {
// 	constructor(_x = 0, _y = _x) {
// 		this.x = _x;
// 		this.y = _y;
// 	}
// }

// class Circle {
// 	constructor() {
// 		this.position  = new Vector2(app.view.width / 2, app.view.height);
// 		this.speed     = new Vector2((Math.random() * 3) + 0.5, (Math.random() * 3) + 0.5);
// 		this.direction = new Vector2(Math.random() > 0.5 ? 1 : -1, Math.random() > 0.5 ? 1 : -1);

// 		this._element = new PIXI.Graphics();

// 		this._element.beginFill(0xffffff);
// 		this._element.drawCircle(0, 0, 30);
// 		this._element.endFill();
// 	}

// 	update() {
// 		if (this.position.x > app.view.width || this.position.x < 0) {
// 			this.direction.x *= -1;
// 		}

// 		if (this.position.y > app.view.height || this.position.y < 0) {
// 			this.direction.y *= -1;
// 		}

// 		this.position.x += this.speed.x * this.direction.x * delta;
// 		this.position.y += this.speed.y * this.direction.y * delta;

// 		this._element.position.set(this.position.x, this.position.y);

// 		console.log({ position : this.position });
// 	}
// }

// let circle;

// export const setup = (_app) => {
// 	app = _app;

// 	circle = new Circle();

// 	app.stage.addChild(circle._element);
// };

// export const update =  _delta => {
// 	delta = _delta;

// 	circle.update();
// };
