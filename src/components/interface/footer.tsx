import Image from "next/image";

const currentYear = new Date(Date.now()).getFullYear();

export const AppFooter = () => {
  return (
    <div className="p-2 grid md:grid-cols-2 w-full bg-neutral-950/50">
      <div>
        <a href="https://github.com/yashodhanketkar/moviedb" target="_blank">
          MovieDB
        </a>
      </div>
      <div className="text-right flex md:items-end gap-2 flex-col">
        <span className="text-xs">Powered by</span>
        <TMDBLogo />
        <VercelLogo />
      </div>
      <span className="col-span-2 text-xs text-center">
        ©2023{currentYear.toString() !== "2023" && `- ${currentYear}`} All
        rights reserved. MovieDB
      </span>
    </div>
  );
};

const TMDBLogo = () => {
  return (
    <a href="https://www.themoviedb.org/" target="_blank" title="tmdb">
      <Image
        width={100}
        height={100}
        className="h-3 w-auto"
        src="/tmdblogo.svg"
        alt="tmdb logo"
      />
    </a>
  );
};

const VercelLogo = () => {
  return (
    <a href="https://vercel.com/" target="_blank" title="vercel">
      <Image
        width={100}
        height={100}
        className="h-3 w-auto px-2 invert"
        src="/vercel.svg"
        alt="vercel logo"
      />
    </a>
  );
};
