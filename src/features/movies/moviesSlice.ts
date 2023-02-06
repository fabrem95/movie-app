import {
	createEntityAdapter,
	createSlice,
	EntityAdapter,
	PayloadAction,
} from "@reduxjs/toolkit";
import { IMovie } from "../../types/movies";
import { RootState } from "../../app/store";

const moviesAdapter: EntityAdapter<IMovie> = createEntityAdapter({
	selectId: (movie) => movie.imdbID,
});

const initialState = moviesAdapter.getInitialState();

const moviesSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		addMovie(state, action: PayloadAction<IMovie[]>) {
			moviesAdapter.upsertMany(state, action.payload);
		},
	},
});

export const { addMovie } = moviesSlice.actions;

export default moviesSlice.reducer;

export const {
	selectAll: selectAllMovies,
	selectById: selectMovieById,
	selectIds: selectMoviesIds,
	// Pass in a selector that returns the posts slice of state
} = moviesAdapter.getSelectors<RootState>((state) => state.movies);
