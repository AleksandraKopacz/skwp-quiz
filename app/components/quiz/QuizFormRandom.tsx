// HOOKS
import { useEffect, useState } from "react";
// COMPONENTS
import { Results } from "./Results";
// DATA
import { chapter1, chapter2, chapter3 } from "~/lib/textbook-questions";

const NUMBER_OF_QUESTIONS: number = 20;
const renderQuestions = (question: any[]) => {
  const questionNumbers: number[] = [];
  let randomArray = [];
  while (questionNumbers.length < NUMBER_OF_QUESTIONS) {
    const r = Math.floor(Math.random() * questions.length);
    if (questionNumbers.indexOf(r) === -1) questionNumbers.push(r);
  }
  for (let i = 0; i < NUMBER_OF_QUESTIONS; i++) {
    randomArray[i] = question[questionNumbers[i]];
  }
  return randomArray;
};

export function QuizForm() {
  const [finished, setFinished] = useState<boolean>(false);
  const [choosenQuestions, setChoosenQuestions] = useState(() =>
    renderQuestions(questions),
  );
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [answerArray, setAnswerArray] = useState<string[]>([]);

  const saveAnswer = (e: string, index: number) => {
    answerArray[index] = e;
  };

  const submitAnswers = () => {
    let temp = 0;
    for (let i = 0; i < NUMBER_OF_QUESTIONS; i++)
      if (choosenQuestions[i].correctAnswer == answerArray[i]) temp++;
    setCorrectCount(temp);
    setFinished(true);
  };

  const restartQuiz = () => {
    setAnswerArray([]);
    setCorrectCount(0);
    setChoosenQuestions(() => renderQuestions(questions));
    setFinished(false);
  };

  return (
    <div>
      <ul>
        {choosenQuestions.map((question, index) => (
          <>
            <li key={index}>
              {index + 1}. {question.queTitle}
            </li>
            <ul>
              {question.queChoices.map((choice: string, index: number) => (
                <li key={index}>
                  <label>
                    <input
                      name={question.queTitle}
                      type="radio"
                      value={choice}
                      onChange={(e) => saveAnswer(e.target.value, index)}
                    />
                    {choice}
                  </label>
                </li>
              ))}
            </ul>
          </>
        ))}
      </ul>
      {finished ? (
        <>
          <button onClick={() => restartQuiz()}>Restart</button>
          <Results
            correctAnswers={correctCount}
            numberOfQuestions={NUMBER_OF_QUESTIONS}
          />
        </>
      ) : (
        <button onClick={() => submitAnswers()}>Zakończ</button>
      )}
    </div>
  );
}

const questions: Question = chapter1.concat(chapter2, chapter3);
