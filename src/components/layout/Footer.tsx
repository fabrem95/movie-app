import { Footer as MantineFooter } from "@mantine/core";

type Props = {};

const Footer = (props: Props) => {
	return (
		<MantineFooter height={60} p="md">
			<div>Movie App</div>
			<div>Ⓒ2023, Movie, Inc. or its affiliates </div>
		</MantineFooter>
	);
};

export default Footer;
