import {
	Container,
	createStyles,
	Flex,
	Group,
	Image,
	SimpleGrid,
	Space,
	Stack,
	Text,
	ThemeIcon,
	Title,
} from "@mantine/core";

import { EntityId } from "@reduxjs/toolkit";
import {
	IconCalendarEvent,
	IconClockPlay,
	IconStarFilled,
	IconThumbUpFilled,
} from "@tabler/icons-react";

type Props = {
	movieId: EntityId;
};

const useStyles = createStyles((theme) => ({
	root: {
		display: "flex",
	},
	textSection: {
		width: "70%",
	},
	imageSection: {
		width: "20%",
	},
	icon: {
		border: "none",
	},
}));

const MovieDetails = () => {
	const { classes } = useStyles();

	return (
		<Container className={classes.root} fluid>
			<Stack className={classes.textSection}>
				<Title>Título</Title>
				<Space />
				<Flex align="center" justify="flex-start" gap="lg">
					<Group>
						<Text>IMBD Rating</Text>
						<ThemeIcon
							className={classes.icon}
							color="orange"
							variant="outline"
						>
							<IconStarFilled />
						</ThemeIcon>
					</Group>
					<Group>
						<Text>IMBD Votes </Text>
						<ThemeIcon className={classes.icon} color="blue" variant="outline">
							<IconThumbUpFilled />
						</ThemeIcon>
					</Group>
					<Group>
						<Text>Runtime</Text>
						<ThemeIcon className={classes.icon} color="gray" variant="outline">
							<IconClockPlay />
						</ThemeIcon>
					</Group>
					<Group>
						<Text>Year</Text>
						<ThemeIcon className={classes.icon} color="green" variant="outline">
							<IconCalendarEvent />
						</ThemeIcon>
					</Group>
				</Flex>
				<Space />
				<Text>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
					nesciunt expedita vero explicabo libero possimus iusto adipisci, esse
					totam rem tenetur delectus perferendis eveniet sed et nisi reiciendis?
					Eveniet, illo?
				</Text>
				<SimpleGrid cols={2}>
					<Text>Director:</Text>
					<Text></Text>
					<Text>Stars:</Text>
					<Text></Text>
					<Text>Genres:</Text>
					<Text></Text>
					<Text>Languages:</Text>
					<Text></Text>
					<Text>Awards:</Text>
					<Text></Text>
				</SimpleGrid>
			</Stack>
			<Image width="30%" />
		</Container>
	);
};

export default MovieDetails;
