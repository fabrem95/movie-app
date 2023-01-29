import {
	createEntityAdapter,
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit";
import { IMovie } from "../../types/movies";

const initialState: IMovie[] = [];

const todosAdapter = createEntityAdapter();

const moviesSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		// todoAdded(state, action: PayloadAction) {
		// 	state.push(action.payload);
		// },
	},
});

export const {} = moviesSlice.actions;

export default moviesSlice.reducer;
