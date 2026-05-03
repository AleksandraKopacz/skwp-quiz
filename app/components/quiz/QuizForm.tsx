// HOOKS
import { useEffect, useState } from "react";
// COMPONENTS
import { Results } from "./Results";
// DATA
import { chapter1, chapter2, chapter3 } from "~/lib/textbook-questions";

export function QuizForm(chapterId: { chapterId: string }) {
  // GET QUESTIONS
  const getQuestions = () => {
    switch (chapterId.chapterId) {
      case "1":
        return chapter1;
      case "2":
        return chapter2;
      case "3":
        return chapter3;
      /*case "4":
        return chapter4;
      case "5":
        return chapter5;
      case "6":
        return chapter6;
      case "7":
        return chapter7
      case "8":
        return chapter8
      case "9":
        return chapter9
      case "10":
        return chapter10
      case "11":
        return chapter11
      case "test"
        return test*/
      default:
        return chapter1.concat(
          chapter2,
          chapter3 /*, chapter4, chapter5, chapter6, chapter7, chapter8, chapter9, chapter10, chapter11, test*/,
        );
    }
  };

  const questions: Question = getQuestions();

  // GET LENGTH
  const getLength = () => {
    if (questions.length > 20) return 20;
    else return questions.length;
  };

  const NUMBER_OF_QUESTIONS: number = getLength();

  // RANDOMIZE QUESTIONS
  const renderQuestions = (question: Question) => {
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
