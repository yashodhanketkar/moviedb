import { ImagePrefix } from "@/common/constants";
import type { MovieDetailsResponse, TvDetailsResponse } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Star } from "lucide-react";

type DetailViewProps = {
  data: MovieDetailsResponse | TvDetailsResponse;
};

export const DetailView = ({ data }: DetailViewProps) => {
  const isMovie = "title" in data;
  const title = isMovie ? data.title : data.name;
  const original_title = isMovie ? data.original_title : data.original_name;
  const release_date = isMovie ? data.release_date : data.first_air_date;

  if (!title) return null;

  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10 h-screen w-screen">
        <Image
          fill
          src={ImagePrefix + data.backdrop_path}
          alt="backdrop"
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 background-image-gradient-radial" />
      </div>

      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          <div className="w-full md:w-1/3 lg:w-1/4 shrink-0">
            <div className="relative aspect-[2/3] overflow-hidden rounded-lg border border-border shadow-xl">
              <Image
                fill
                src={ImagePrefix + data.poster_path}
                alt={title}
                className="object-cover"
                priority
                sizes="25vw"
              />
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <section className="space-y-2">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                {title}
                {release_date && (
                  <span className="ml-2 font-light opacity-50">
                    ({new Date(release_date).getFullYear()})
                  </span>
                )}
              </h1>
              {original_title !== title && (
                <p className="text-lg italic opacity-70">{original_title}</p>
              )}
            </section>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 font-semibold">
                <Star className="w-4 h-4" />
                {data.vote_average.toFixed(1)}
                <span className="text-xs font-normal opacity-50">
                  ({data.vote_count})
                </span>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <p className="text-sm">Released: {release_date}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {data.genres.map((g) => (
                <Badge key={g.id} variant="secondary" className="rounded-md">
                  {g.name}
                </Badge>
              ))}
            </div>

            {data.tagline && (
              <p className="text-xl italic opacity-80 border-l-2 pl-4">
                {data.tagline}
              </p>
            )}

            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Overview</h2>
              <p className="leading-relaxed opacity-90 max-w-3xl">
                {data.overview}
              </p>
            </div>

            <Separator />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="space-y-1">
                <p className="font-semibold uppercase text-[10px] tracking-wider opacity-50">
                  Production
                </p>
                <div className="flex flex-wrap gap-x-2">
                  {data.production_companies.map((c, i) => (
                    <span key={c.id}>
                      {c.name}
                      {i < data.production_companies.length - 1 ? "," : ""}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <p className="font-semibold uppercase text-[10px] tracking-wider opacity-50">
                  Links
                </p>
                <Button
                  asChild
                  variant="secondary"
                  className="h-auto font-normal"
                >
                  <Link
                    href={data.homepage}
                    target="_blank"
                    className="flex items-center gap-1"
                  >
                    Official Website <ExternalLink className="w-3 h-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
