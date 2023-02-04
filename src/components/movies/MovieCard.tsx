import { Card, createStyles, Text } from "@mantine/core";

import { IMovie } from "../../types";

type Props = {
	movie: IMovie;
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

const MovieCard = ({ movie }: Props) => {
	const { classes } = useStyles();

	return (
		<Card className={classes.movieCard} shadow="lg">
			<Card.Section className={classes.cardSection}>
				<img className={classes.cardImg} src={movie.Poster} />
			</Card.Section>
			<footer className={classes.cardFooter}>
				<Text color="dark.5">{movie.Title}</Text>
				<Text color="dark.5">{movie.Year}</Text>
			</footer>
		</Card>
	);
};

export default MovieCard;
