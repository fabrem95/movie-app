import { Suspense } from "react";
import { Outlet } from "react-router";
import { AppShell } from "@mantine/core";

import Header from "./Header";
import Footer from "./Footer";

type Props = {};

const Layout = (props: Props) => {
	return (
		<AppShell
			padding="md"
			header={<Header />}
			footer={<Footer />}
			styles={(theme) => ({
				main: {
					backgroundColor:
						theme.colorScheme === "dark"
							? theme.colors.dark[8]
							: theme.colors.gray[0],
				},
			})}
		>
			<Suspense fallback="Loading...">
				<Outlet />
			</Suspense>
		</AppShell>
	);
};

export default Layout;
