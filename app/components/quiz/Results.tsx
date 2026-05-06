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
  const Congratulations = () => {
    const result = calculateResult();
    if (result >= 60) return <p>Gratulacje! Otrzymujesz tytuł księgowej.</p>;
    else if (result >= 30) return <p>Zdajesz egzamin.</p>;
    else return <p>Egzamin niezaliczony.</p>;
  };
  return (
    <div>
      <p>{calculateResult()}%</p>
      <p>{correctAnswers}/{numberOfQuestions}</p>
      <Congratulations />
    </div>
  );
}
