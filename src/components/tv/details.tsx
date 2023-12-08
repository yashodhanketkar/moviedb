"use client";

import { useGetTVQuery } from "@/context/features/tmdbApi";
import { DetailView, ErrorScreen, Loading } from "../interface";

type TVDetailsProps = {
  id: string;
};

export const TVDetails = ({ id }: TVDetailsProps) => {
  const { data, isLoading, isError } = useGetTVQuery(id);

  if (isLoading)
    return (
      <Loading describedby="TV loader" description="Loading tv shows data" />
    );

  if (isError || !data)
    return <ErrorScreen message="Failed to load tv shows data" />;

  return <DetailView data={data} />;
};
