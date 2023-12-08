import { APIButton } from "./api";

export const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center fixed top-0">
      <h1 className="text-2xl font-semibold">Welcome to movieDB</h1>
      <APIButton />
    </div>
  );
};
