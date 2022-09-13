import { Route, Routes } from "react-router-dom";
import "./App.css";
import FirstScreen from "./Pages/FirstScreen";
import Home from "./Pages/Home";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<FirstScreen />} />
				<Route path="/play-game" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
