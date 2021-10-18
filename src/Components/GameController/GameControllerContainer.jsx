import { useEffect } from "react";
import * as PIXI     from "pixi.js";

// Import Own Components
// import { setup, update } from "./Game";
import GameController from "./GameController.jsx";

const GameControllerContainer = () => {
	useEffect(() => {
		const app = new PIXI.Application();

		const gameController = document.getElementById("GameController");

		gameController.appendChild(app.view);

		// const gameCanvas  = document.getElementById("game_canvas");
		// gameCanvas.width  = gameCanvas.clientWidth;
		// gameCanvas.height = gameCanvas.clientHeight;

		// const ctx = gameCanvas.getContext("2d");

		// setup(ctx, gameCanvas);

		// let gameLoopId;

		// const GameLoop = () => {
		// 	update();

		// 	gameLoopId = requestAnimationFrame(GameLoop);
		// };

		// GameLoop();

		// return () => {
		// 	cancelAnimationFrame(gameLoopId);
		// };
	}, []);

	return (
		<GameController />
	);
};

export default GameControllerContainer;

