import { NavBar } from "~/components/ui/NavBar";
import type { Route } from "./+types/quiz";
import { QuizForm } from "~/components/quiz/QuizForm";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: "Quiz" },
    { name: "description", content: "Quiz z zagadnień z księgowości" },
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
