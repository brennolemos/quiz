import QuestionModel from "../model/question";
import styles from "../styles/Question.module.css";
import Answer from "./Answer";
import Command from "./Command";

const options = [
  { value: "A", color: "#F2C866" },
  { value: "B", color: "#F266BA" },
  { value: "C", color: "#85D4F2" },
  { value: "D", color: "#BCE596" },
];

interface QuestionProps {
  value: QuestionModel;
  onResponse: (index: number) => void;
}

export default function Question(props: QuestionProps) {
  const question = props.value;

  const renderAnswers = () => {
    return question.answers.map((answer, i) => {
      return (
        <Answer
          key={i}
          value={answer}
          index={i}
          option={options[i].value}
          backgroundColor={options[i].color}
          onResponse={props.onResponse}
        />
      );
    });
  };

  return (
    <div className={styles.question}>
      <Command text={question.command} />
      {renderAnswers()}
    </div>
  );
}
