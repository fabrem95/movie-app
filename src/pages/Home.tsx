import { Space, Title } from "@mantine/core";
import { useGetMoviesQuery } from "../api/movies/moviesApi";
import MovieListing from "../components/movies/MovieListing";

const Home = () => {
	const { data = [], isSuccess } = useGetMoviesQuery({});

	return (
		<>
			<Title>Estrenos</Title>
			<MovieListing movies={data} />
			<Space />
			<Title>Series</Title>
			<MovieListing movies={data} />
		</>
	);
};

export default Home;
