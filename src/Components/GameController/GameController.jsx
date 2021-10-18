// Import Own Components
import boardImg from "Resources/img/board.png";
import "./GameController.scss";

const GameController = () => (
	<div id="GameController">
		<img
			src={boardImg}
			alt="board"
		/>

		{/* <canvas id="game_canvas" /> */}
	</div>
);

export default GameController;
