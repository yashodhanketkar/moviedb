import { decodeParam } from "@/common/functions";
import { MovieDetails } from "@/components/movies";
import type { ParamProps } from "@/types";

const MovieDetailsPage = async ({ params }: ParamProps) => {
  const id = decodeParam(params.id);

  return <MovieDetails id={id} />;
};

export default MovieDetailsPage;
