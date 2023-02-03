import { baseApi } from "../baseApi";

import { IMovie } from "../../types";

const moviesApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getMovies: builder.query<
			IMovie[],
			{ type?: string; id?: string; search?: string }
		>({
			query: ({ type = "movie", id = "tt3896198", search = "Harry" }) =>
				`?i=${id}&s=${search}&type=${type}`,
			transformResponse: (resp: {
				Response: string;
				Search: IMovie[];
				totalResults: string;
			}) => resp.Search,
		}),
		getShows: builder.query<
			IMovie[],
			{ type: string; id: string; search: string }
		>({
			query({ type = "series", id = "tt3896198", search = "Friends" }) {
				return `?i=${id}&s=${search}&type=${type}`;
			},
		}),
		getMovieOrShowDetails: builder.query<IMovie, string>({
			query(id: string, plot = "full") {
				return `?i=${id}&Plot=${plot}`;
			},
		}),
	}),
});

export const { useGetMoviesQuery } = moviesApi;
