import { Suspense } from "react";
import { Outlet } from "react-router";
import { AppShell, Loader, ScrollArea } from "@mantine/core";

import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
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
			{/* <ScrollArea> */}
			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
			{/* </ScrollArea> */}
		</AppShell>
	);
};

export default Layout;
