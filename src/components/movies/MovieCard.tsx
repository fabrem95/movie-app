import { Card, createStyles, Loader, Text } from "@mantine/core";

import { IMovie } from "../../types";
import { useAppselector } from "../../app/hooks";
import { selectMovieById } from "../../features/movies/moviesSlice";
import { EntityId } from "@reduxjs/toolkit";

type Props = {
	movieId: EntityId;
};

const useStyles = createStyles((theme) => ({
	movieCard: {
		height: "90%",
		backgroundColor: theme.colors.dark[0],
		cursor: "pointer",
	},
	cardSection: {
		height: "85%",
	},
	cardImg: {
		width: "100%",
		height: "100%",
	},
	cardFooter: {
		padding: "0.2rem",
	},
}));

const MovieCard = ({ movieId }: Props) => {
	const { classes } = useStyles();

	const Movie = useAppselector((state) => selectMovieById(state, movieId));

	return !Movie ? (
		<Loader />
	) : (
		<Card className={classes.movieCard} shadow="lg">
			<Card.Section className={classes.cardSection}>
				<img className={classes.cardImg} src={Movie.Poster} />
			</Card.Section>
			<footer className={classes.cardFooter}>
				<Text color="dark.5">{Movie.Title}</Text>
				<Text color="dark.5">{Movie.Year}</Text>
			</footer>
		</Card>
	);
};

export default MovieCard;
