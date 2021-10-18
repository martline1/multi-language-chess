// Import Own Components
import defaultAvatarImg from "Resources/img/default_avatar.png";
import "./Player.scss";

const Player = ({
	name,
	elo,
}) => (
	<div id="Player">
		<div className="imageContainer">
			<img src={defaultAvatarImg} alt="player" />
		</div>

		<div className="info">
			<h4>{name}</h4>
			<p>Elo {elo}</p>
		</div>
	</div>
);

export default Player;
