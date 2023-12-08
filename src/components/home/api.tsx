"use client";

import { useEffect, useState } from "react";

export const APIButton = () => {
  const [value, setValue] = useState<string | null>(null);

  const handleAPI = () => {
    if (localStorage.getItem("tmdb-token")) {
      localStorage.removeItem("tmdb-token");
      window.location.href = "/";
    }
    const res = prompt("Enter your API key");
    if (res) {
      setValue(res);
      window.location.href = "/";
    }
  };

  useEffect(() => {
    if (value !== null) localStorage.setItem("tmdb-token", value);
  }, [value]);

  return <button onClick={handleAPI}>Enter API Key</button>;
};
