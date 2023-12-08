import { ImagePrefix, QuerySalt } from "@/common/constants";
import { encodeParam } from "@/common/functions";
import { MovieType, TVType } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const Card = (media: MovieType | TVType) => {
  const linkPrefix = media.media_type === "movie" ? "movies/" : "tv/";

  let title: string;

  if (media.media_type === "tv") {
    title = (media as TVType).name;
  } else if (media.media_type === "movie") {
    title = (media as MovieType).title;
  } else return;

  const link = linkPrefix + encodeParam(media.id);

  return (
    <Link href={link}>
      <div className="shadow shadow-white/10 hover:shadow-white/20 mx-auto rounded-2xl w-full p-2">
        <p className="text-xl text-white font-bold line-clamp-1">{title}</p>
        {media.adult && (
          <span className="absolute top-2 right-2 text-red-500">R</span>
        )}
        <Image
          width={300}
          height={400}
          src={ImagePrefix + media.poster_path}
          alt={title + "-poster"}
          className="w-full px-2 py-4 hover:px-0 hover:py-1 transition-all duration-300 ease-in-out"
        />
        <div className="w-full inline-flex">
          <span>{media.original_language.toUpperCase()}</span>
          <span className="flex-grow text-end inline-flex gap-1 items-center justify-end">
            {media.vote_average.toFixed(1)}
            <span className="text-xs">({media.vote_count})</span>
          </span>
        </div>
      </div>
    </Link>
  );
};
