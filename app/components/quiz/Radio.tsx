import { useEffect, useState } from "react";

export function Radio({
  question,
  choice,
  saveAnswer,
  index,
  finished,
  correctAnswer,
}: {
  question: string;
  choice: string;
  saveAnswer: (e: string, index: number) => void;
  index: number;
  finished: boolean;
  correctAnswer: string;
}) {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [classValues, setClassValues] = useState<string>("");
  useEffect(() => {
    if (finished === true) {
      setDisabled(true);
      if (choice === correctAnswer) setClassValues("font-bold text-green-600");
      else setClassValues("text-red-600");
    } else {
      setDisabled(false);
      setClassValues("");
    }
  }, [finished]);
  return (
    <label className={classValues}>
      <input
        name={question}
        type="radio"
        value={choice}
        onChange={(e) => saveAnswer(e.target.value, index)}
        disabled={disabled}
      />
      {choice}
    </label>
  );
}
