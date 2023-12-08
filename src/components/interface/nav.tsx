import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="inline-flex gap-1">
      <Link className="font-semibold hover:text-white" href="/movies">
        Movies
      </Link>
      <Link className="font-semibold hover:text-white" href="/tv">
        TV
      </Link>
    </nav>
  );
};
