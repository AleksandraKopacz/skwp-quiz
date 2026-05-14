import { NavBar } from "~/components/ui/NavBar";
import type { Route } from "./+types/quiz";
import { QuizForm } from "~/components/quiz/QuizForm";
import { redirect } from "react-router";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: "Quiz" },
    { name: "description", content: "Quiz z zagadnień z księgowości" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  switch (params.chapterId) {
    case "1":
      break;
    case "2":
      break;
    case "3":
      break;
    case "4":
      break;
    case "5":
      break;
    case "6":
      break;
    case "7":
      break;
    case "8":
      break;
    case "9":
      break;
    case "10":
      break;
    case "11":
      break;
    case "test":
      break;
    case "random":
      break;
    default:
      throw redirect("/quiz/random");
  }
}

export default function Quiz({ params }: Route.ComponentProps) {
  return (
    <>
      <NavBar />
      <QuizForm chapterId={params.chapterId} />
    </>
  );
}
