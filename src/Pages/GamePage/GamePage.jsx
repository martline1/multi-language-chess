// Import Own Components
import Menu           from "Components/Menu";
import Player         from "Components/Player";
import GameController from "Components/GameController";
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

				<GameController />

				<Player
					name="martline1"
					elo={1600}
				/>
			</div>
		</div>
	);
};

export default GamePage;
