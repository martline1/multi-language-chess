// Import Own Components
import boardImg from "Resources/img/board.png";
import "./GameController.scss";

const GameController = () => (
	<div id="GameController">
		<img
			src={boardImg}
			alt="board"
		/>

		<div id="canvas_container" />
	</div>
);

export default GameController;
