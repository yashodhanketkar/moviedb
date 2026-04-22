import { decodeParam } from "@/common/functions";
import { TVDetails } from "@/components/tv";
import type { ParamProps } from "@/types";

const TVDetailsPage = async ({ params }: ParamProps) => {
  const { id } = await params;
  if (!id) return;

  return <TVDetails id={decodeParam(id)} />;
};

export default TVDetailsPage;
