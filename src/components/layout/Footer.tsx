import { createStyles, Flex, Footer as MantineFooter } from "@mantine/core";

type Props = {};

const useStyles = createStyles((theme) => ({
	root: {
		width: "100%",
	},
}));

const Footer = (props: Props) => {
	const { classes } = useStyles();

	return (
		<MantineFooter height={60} p="md">
			<Flex className={classes.root} align="center" justify="center">
				<div>Movie App</div>
				<div>Ⓒ2023, Movie, Inc. or its affiliates </div>
			</Flex>
		</MantineFooter>
	);
};

export default Footer;
