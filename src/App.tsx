import { lazy } from "react";
import { Route, Routes } from "react-router";
import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

import Layout from "./components/layout/Layout";
const Home = lazy(() => import("./pages/Home"));

import "./App.css";

function App() {
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: "mantine-color-scheme",
		defaultValue: "dark",
		getInitialValueInEffect: true,
	});
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				theme={{
					colorScheme,
					breakpoints: {
						xs: 420,
						sm: 800,
						md: 1000,
						lg: 1200,
						xl: 1400,
					},
				}}
				withNormalizeCSS
				withGlobalStyles
			>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="/" element={<Home />} />
					</Route>
				</Routes>
			</MantineProvider>
		</ColorSchemeProvider>
	);
}

export default App;
