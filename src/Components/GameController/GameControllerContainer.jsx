/* eslint-disable */
import { useEffect } from "react";
// eslint-disable-next-line
import { PIXI } from "Resources/pixi.min";

// Import Own Components
// import { setup, update } from "./Game";
import { debounce }   from "Helpers";
import GameController from "./GameController.jsx";

const GameControllerContainer = () => {
	useEffect(() => {
		const canvasContainer = document.getElementById("canvas_container");
		const dimensions      = canvasContainer.getBoundingClientRect();

		const app = new PIXI.Application({
			width           : dimensions.width,
			height          : dimensions.height,
			backgroundColor : 0x000000,
			resolution      : window.devicePixelRatio,
			autoDensity     : true,
		});

		const onResizeFunc = () => {
			const _canvasContainer = document.getElementById("canvas_container");
			const _dimensions      = _canvasContainer.getBoundingClientRect();

			app.renderer.resize(_dimensions.width, _dimensions.height);
		};
		onResizeFunc();

		const onResize = debounce(onResizeFunc, 10);

		canvasContainer.appendChild(app.view);

		window.addEventListener("resize", onResize);

		return () => {
			window.removeEventListener("resize", onResize);
		};
	}, []);

	return (
		<GameController />
	);
};

export default GameControllerContainer;
