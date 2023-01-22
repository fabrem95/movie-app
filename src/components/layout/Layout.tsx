import { AppShell } from "@mantine/core";
import { Outlet } from "react-router";

import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {};

export const Layout = (props: Props) => {
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
			<Outlet />
		</AppShell>
	);
};
