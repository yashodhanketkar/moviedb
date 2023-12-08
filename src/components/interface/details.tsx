import { ImagePrefix } from "@/common/constants";
import type { MovieDetailsResponse, TvDetailsResponse } from "@/types";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { CircleLoader } from "react-spinners";

const nunitoSans = Nunito_Sans({
  weight: "700",
  subsets: ["latin"],
});

type DetailViewProps = {
  data: MovieDetailsResponse | TvDetailsResponse;
};

export const DetailView = ({ data }: DetailViewProps) => {
  let title: string;
  let original_title: string;
  let release_date: string;

  if (Object.hasOwn(data, "title")) {
    const d = data as MovieDetailsResponse;
    title = d.title;
    original_title = d.original_title;
    release_date = d.release_date;
  } else if (Object.hasOwn(data, "name")) {
    const d = data as TvDetailsResponse;
    title = d.name;
    original_title = d.original_name;
    release_date = d.first_air_date;
  } else {
    return;
  }

  return (
    <>
      <div className="flex flex-wrap md:px-32 flex-col md:flex-row gap-1 md:gap-4 px-4 pt-4 md:items-center">
        <span className={`text-2xl ${nunitoSans.className}`}>{title}</span>
        {release_date && <span>({new Date(release_date).getFullYear()})</span>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 py-4 px-4 md:px-32 gap-4">
        <div className="w-full col-span-1">
          <Image
            src={ImagePrefix + data.poster_path}
            alt={title}
            width={300}
            height={400}
            className="w-auto h-auto"
            priority
          />
        </div>
        <div className="flex flex-col gap-2 col-span-3">
          {original_title !== title && (
            <p className="italic">{original_title}</p>
          )}
          <div className="flex flex-col">
            <p className="italic">Release Date: {release_date}</p>
            <p className="inline-flex">
              {data.vote_average.toFixed(1)} / {data.vote_count}
            </p>
          </div>
          <p>{data.tagline}</p>
          <p className="inline-flex gap-2 flex-wrap py-2">
            {data.genres.map((g) => (
              <span key={g.id} className="shadow shadow-white/30 px-2 rounded">
                {g.name}
              </span>
            ))}
          </p>
          <hr className="border-white/30" />
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">Overview</p>
            <p className="max-w-prose">{data.overview}</p>
          </div>
          <hr className="border-white/30" />
          <p className="inline-flex gap-1 flex-wrap py-2">
            {data.production_countries.map((c) => (
              <span
                key={c.iso_3166_1}
                className="shadow shadow-white/30 px-2 rounded"
              >
                {c.name}
              </span>
            ))}
          </p>
          <p className="inline-flex gap-1 flex-wrap py-2">
            {data.production_companies.map((c) => (
              <span key={c.id} className="shadow shadow-white/30 px-2 rounded">
                {c.name}
              </span>
            ))}
          </p>
          <Link
            href={data.homepage}
            target="_blank"
            className="bg-white/10 ring-white/50 ring-1 hover:bg-white/50 py-2 px-4 rounded w-fit"
          >
            HomePage
          </Link>
        </div>
      </div>
    </>
  );
};
