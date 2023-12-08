"use client";

import { useGetMovieQuery } from "@/context/features/tmdbApi";
import { DetailView, ErrorScreen, Loading } from "../interface";

type MovieDetailsProps = {
  id: string;
};

export const MovieDetails = ({ id }: MovieDetailsProps) => {
  const { data, isLoading, isError } = useGetMovieQuery(id);

  if (isLoading)
    return (
      <Loading describedby="Movie loader" description="Loading movie data" />
    );

  if (isError || !data)
    return <ErrorScreen message="Failed to load movie data" />;

  return <DetailView data={data} />;
};
