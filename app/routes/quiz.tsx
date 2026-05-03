import { NavBar } from "~/components/ui/NavBar";
import type { Route } from "./+types/quiz";
import { QuizForm } from "~/components/quiz/QuizForm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {}

export default function Quiz({ params }: Route.ComponentProps) {
  return (
    <>
      <NavBar />
      <QuizForm chapterId={params.chapterId} />
    </>
  );
}
