import { IconButton } from "@mui/material";
import { Globe }      from "react-feather";

// Import Own Components
import { Brain } from "Resources/icons";
import "./Menu.scss";

const Menu = () => (
	<div id="Menu">
		<IconButton className="option">
			<Brain />
		</IconButton>

		<IconButton className="option last">
			<Globe color="#ACACAC" size={38} />
		</IconButton>
	</div>
);

export default Menu;
