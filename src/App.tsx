import { useState } from "react";
import { Router, Route, Routes } from "react-router";

import { Layout } from "./components/layout/Layout";

import "./App.css";
import { Home } from "./pages/Home";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
