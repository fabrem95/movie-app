import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovie } from "../types";

const APIKey = "7589564e";

export const baseApi = createApi({
	reducerPath: "OMDbAPI",
	baseQuery: fetchBaseQuery({
		baseUrl: `https://www.omdbapi.com/?&apiKey=${APIKey}&`,
	}),
	endpoints: () => ({}),
});
