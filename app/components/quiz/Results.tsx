import { useEffect, useState } from "react";

export function Results({
  correctAnswers,
  numberOfQuestions,
}: {
  correctAnswers: number;
  numberOfQuestions: number;
}) {
  const calculateResult = () => {
    return (correctAnswers * 100) / numberOfQuestions;
  };
  return <div>{calculateResult()}%</div>;
}
