import { ImagePrefix } from "@/common/constants";
import { encodeParam } from "@/common/functions";
import { MovieType, TVType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ContentCard = (media: MovieType | TVType) => {
  const isTV = media.media_type === "tv";
  const linkPrefix = isTV ? "tv/" : "movies/";
  const title = isTV ? (media as TVType).name : (media as MovieType).title;

  if (!title) return null;

  const link = linkPrefix + encodeParam(media.id);

  return (
    <Link href={link} className="block group">
      <Card className="relative aspect-[2/3] overflow-hidden border-none transition-transform duration-300 group-hover:scale-[1.02]">
        <Image
          fill
          src={ImagePrefix + media.poster_path}
          alt={`${title}-poster`}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        {media.adult && (
          <div className="absolute top-3 right-3">
            <Badge variant="destructive" className="font-bold">
              R
            </Badge>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
          <h3 className="text-lg font-bold text-white leading-tight line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center justify-between text-sm text-gray-300">
            <Badge
              variant="secondary"
              className="bg-white/10 backdrop-blur-md border-none text-white uppercase"
            >
              {media.original_language}
            </Badge>
            <div className="flex items-center gap-1 font-medium">
              <span className="text-yellow-400">★</span>
              {media.vote_average.toFixed(1)}
              <span className="text-[10px] opacity-70">
                ({media.vote_count})
              </span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};
