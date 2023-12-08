import { decodeParam } from "@/common/functions";
import { TVDetails } from "@/components/tv";
import type { ParamProps } from "@/types";

const TVDetailsPage = async ({ params }: ParamProps) => {
  const id = decodeParam(params.id);

  return <TVDetails id={id} />;
};

export default TVDetailsPage;
