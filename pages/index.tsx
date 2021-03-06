import { useEffect, useRef, useState } from "react";
import Question from "../components/Question";
import AnswerModel from "../model/answer";
import QuestionModel from "../model/question";

const mockQuestion = new QuestionModel(1, "Melhor cor?", [
  AnswerModel.wrong("Green"),
  AnswerModel.wrong("Red"),
  AnswerModel.wrong("Blue"),
  AnswerModel.correct("Black"),
]);

export default function Home() {
  const [question, setQuestion] = useState(mockQuestion);
  const questionRef = useRef<QuestionModel>();

  useEffect(() => {
    questionRef.current = question;
  }, [question]);

  function onResponse(index: number) {
    setQuestion(question.answerWith(index));
  }

  function onComplete() {
    if (!questionRef.current.answered)
      setQuestion(questionRef.current.answerWith(-1));
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Question
        value={question}
        onResponse={onResponse}
        onComplete={onComplete}
      />
    </div>
  );
}
