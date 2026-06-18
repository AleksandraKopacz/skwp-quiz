import { NavBar } from "~/components/ui/NavBar";
import type { Route } from "./+types/home";
import { useEffect } from "react";
import { redirect } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  useEffect(() => {
    throw redirect("/quiz/random");
  }, []);
  return (
    <>
      <NavBar />
    </>
  );
}
