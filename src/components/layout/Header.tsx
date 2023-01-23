import {
	Box,
	createStyles,
	Header as MantineHeader,
	Image,
	Text,
} from "@mantine/core";

import film_png from "../../assets/imgs/film.png";

type Props = {};

const useStyles = createStyles((theme) => ({
	logo: {
		width: "5rem",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}));

const Header = (props: Props) => {
	const { classes } = useStyles();

	return (
		<MantineHeader height={"4rem"} p="0.4rem">
			<Box className={classes.logo}>
				<Image src={film_png} width={30} />
				<Text ta="center" c="teal" weight={600}>
					Movie App
				</Text>
			</Box>
		</MantineHeader>
	);
};

export default Header;
