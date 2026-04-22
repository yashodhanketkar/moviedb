import { decodeParam } from "@/common/functions";
import { MovieDetails } from "@/components/movies";
import type { ParamProps } from "@/types";

const MovieDetailsPage = async ({ params }: ParamProps) => {
  const { id } = await params;
  if (!id) return;

  return <MovieDetails id={decodeParam(id)} />;
};

export default MovieDetailsPage;
