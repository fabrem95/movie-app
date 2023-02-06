import { Carousel } from "@mantine/carousel";
import { createStyles } from "@mantine/core";

import { EntityId } from "@reduxjs/toolkit";

import MovieCard from "./MovieCard";

type Props = {
	moviesIds: EntityId[];
};

const useStyles = createStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
	},
	movieSlide: {
		display: "flex",
		alignItems: "center",
		":hover": {
			transform: "scale(1.1)",
			transition: "all 0.3s",
		},
	},
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

const MovieListing = ({ moviesIds }: Props) => {
	const { classes } = useStyles();

	return (
		<Carousel
			sx={{ width: "90%" }}
			mx="auto"
			height={400}
			styles={{ container: { padding: "0 1rem" } }}
			slideGap="lg"
			slidesToScroll={1}
			align="start"
			containScroll="trimSnaps"
			draggable={false}
			controlsOffset={-1}
			breakpoints={[
				{ minWidth: "xs", slideSize: "100%" },
				{ minWidth: "sm", slideSize: "50%" },
				{ minWidth: "md", slideSize: "33.333%" },
				{ minWidth: "lg", slideSize: "20%" },
			]}
		>
			{moviesIds.length > 0 &&
				moviesIds.map((movieId) => {
					return (
						<Carousel.Slide key={movieId} className={classes.movieSlide}>
							<MovieCard movieId={movieId} />
						</Carousel.Slide>
					);
				})}
		</Carousel>
	);
};

export default MovieListing;
