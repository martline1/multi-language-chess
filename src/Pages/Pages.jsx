import {
	Route,
	Switch,
	Redirect,
	MemoryRouter,
} from "react-router-dom";

// Import Own Components
import GamePage from "./GamePage";

const Pages = () => (
	<MemoryRouter>
		<Switch>
			<Route exact path="/game" component={GamePage} />

			<Redirect to="/game" />
		</Switch>
	</MemoryRouter>
);

export default Pages;
