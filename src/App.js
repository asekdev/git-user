import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./routes/Routes";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div>
			<Navbar />
			<Routes />
		</div>
	);
}

export default App;
