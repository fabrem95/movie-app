import { Loader, Space, Title } from "@mantine/core";
import { useGetMoviesQuery } from "../api/movies/moviesApi";
import MovieListing from "../components/movies/MovieListing";
import { useAppselector } from "../app/hooks";
import { selectMoviesIds } from "../features/movies/moviesSlice";

const Home = () => {
	const MoviesIds = useAppselector(selectMoviesIds);

	const MoviesResp = useGetMoviesQuery({});

	return MoviesResp.isLoading ? (
		<Loader />
	) : (
		<>
			<Title>Estrenos</Title>
			<MovieListing moviesIds={MoviesIds} />
			<Space />
			<Title>Series</Title>
			<MovieListing moviesIds={MoviesIds} />
		</>
	);
};

export default Home;
