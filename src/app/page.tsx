import Link from "next/link";

export const dynamic = "force-dynamic";

const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center fixed top-0">
      <h1 className="text-5xl mb-4 font-semibold">Welcome to movieDB</h1>
      <div className="text-base font-semibold inline-flex items-center gap-2">
        <Link
          className="font-semibold hover:text-white text-xl"
          href={"/movies"}
        >
          Movies
        </Link>
        <span>|</span>
        <Link className="font-semibold hover:text-white text-xl" href={"/tv"}>
          TV
        </Link>
      </div>
    </div>
  );
};

export default Home;
