"use client";

import { useGetTrendingTVQuery } from "@/context/features/tmdbApi";
import { Card, ErrorScreen, Loading } from "../interface";

export const TvList = () => {
  const { data, isError, isLoading } = useGetTrendingTVQuery("day");

  if (isLoading)
    return (
      <Loading
        describedby="Loading tv shows"
        description="Loading trending tv shows"
      />
    );
  if (isError) return <ErrorScreen message="Failed to load tv shows" />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4 gap-4">
      {data?.results.map((tv) => (
        <Card key={tv.id} {...tv} />
      ))}
    </div>
  );
};
