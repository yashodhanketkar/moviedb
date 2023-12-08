"use client";

import { useRouter } from "next/navigation";
import { BarLoader, ClockLoader } from "react-spinners";

type LoadingProps = {
  describedby?: string;
  description?: string;
};

export const Loading = ({ describedby, description }: LoadingProps) => {
  const router = useRouter();

  return (
    <div className="fixed w-screen h-screen flex items-center justify-center top-0 z-50 bg-neutral-800 flex-col gap-8">
      <ClockLoader
        color="#FEFEFE"
        aria-describedby={describedby || "loading"}
        aria-description={description || "loading data"}
        size={200}
      />
      <button
        className="px-4 py-2 shadow shadow-white/75 rounded-md mt-4"
        onClick={() => router.back()}
      >
        Return
      </button>
    </div>
  );
};

type ErrorProps = {
  message: string;
};

export const ErrorScreen = ({ message }: ErrorProps) => {
  const router = useRouter();

  return (
    <div className="fixed w-screen h-screen flex flex-col gap-4 items-center justify-center top-0 z-50 bg-neutral-800">
      <p className="text-base">{message}</p>
      <BarLoader
        color="#FEFEFE"
        aria-describedby={"Error"}
        width={`${message.length * 0.75}ch`}
      />
      <button
        className="px-4 py-2 shadow shadow-white/75 rounded-md mt-4"
        onClick={() => router.back()}
      >
        Return
      </button>
    </div>
  );
};
