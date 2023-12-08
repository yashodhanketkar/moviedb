"use client";

import { useGetTrendingMoviesQuery } from "@/context/features/tmdbApi";
import { Card, ErrorScreen, Loading } from "../interface";

export const MovieList = () => {
  const { data, isError, isLoading } = useGetTrendingMoviesQuery("day");

  if (isLoading)
    return (
      <Loading
        describedby="Loading movies"
        description="Loading trending moveis"
      />
    );
  if (isError) return <ErrorScreen message="Failed to load movies" />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4 gap-4">
      {data?.results.map((movie) => (
        <Card key={movie.id} {...movie} />
      ))}
    </div>
  );
};
