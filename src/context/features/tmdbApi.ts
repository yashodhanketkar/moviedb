import {
  MovieDetailsResponse,
  MovieResponse,
  Range,
  TVResponse,
  TvDetailsResponse,
} from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tmdbApi = createApi({
  reducerPath: "tmdb",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("tmdb-token");
      headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["movies", "tv"],
  endpoints: (builder) => ({
    getTrendingMovies: builder.query<MovieResponse, Range>({
      query: (range) => `trending/movie/${range}?language=en-US`,
      providesTags: ["movies"],
    }),
    getTrendingTV: builder.query<TVResponse, Range>({
      query: (range) => `trending/tv/${range}?language=en-US`,
      providesTags: ["tv"],
    }),
    getMovie: builder.query<MovieDetailsResponse, string>({
      query: (id) => `movie/${id}`,
    }),
    getTV: builder.query<TvDetailsResponse, string>({
      query: (id) => `tv/${id}`,
    }),
  }),
});

export const {
  useGetTrendingMoviesQuery,
  useGetTrendingTVQuery,
  useGetMovieQuery,
  useGetTVQuery,
} = tmdbApi;
