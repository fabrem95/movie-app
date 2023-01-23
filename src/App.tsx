import { lazy } from "react";
import { Route, Routes } from "react-router";

import Layout from "./components/layout/Layout";
const Home = lazy(() => import("./pages/Home"));

import "./App.css";

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
