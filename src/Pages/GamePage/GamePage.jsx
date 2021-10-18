// Import Own Components
import Menu     from "Components/Menu";
import Player   from "Components/Player";
import boardImg from "Resources/img/board.png";
import "./GamePage.scss";

const GamePage = () => {
	return (
		<div id="GamePage">
			<Menu />

			<div className="playersAndKeyboard">
				<Player
					name="StockFish 6"
					elo={1600}
				/>

				<div className="boardContainer">
					<img src={boardImg} alt="board" />
				</div>

				<Player
					name="martline1"
					elo={1600}
				/>
			</div>
		</div>
	);
};

export default GamePage;
