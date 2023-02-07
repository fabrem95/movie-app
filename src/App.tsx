import { lazy } from "react";
import { Route, Routes } from "react-router";
import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { RoutesApp } from "./routes/index";

//Componentes
import Layout from "./components/layout/Layout";
const Home = lazy(() => import("./pages/Home"));

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
						xs: 320,
						sm: 425,
						md: 768,
						lg: 1024,
						xl: 1440,
					},
				}}
				withNormalizeCSS
				withGlobalStyles
			>
				<Routes>
					<Route path={RoutesApp.Home} element={<Layout />}>
						<Route path={RoutesApp.Home} element={<Home />} />
					</Route>
				</Routes>
			</MantineProvider>
		</ColorSchemeProvider>
	);
}

export default App;
