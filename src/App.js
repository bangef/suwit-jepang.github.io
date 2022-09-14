import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import FirstScreen from "./Pages/FirstScreen";
import InputUser from "./Pages/InputUser";

function App() {
	return (
		<div className="App">
			<Layout>
				<Routes>
					<Route path="/" element={<FirstScreen />} />
					<Route path="/input-user" element={<InputUser />} />
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
