import QuestionModel from "../model/question";
import styles from "../styles/Question.module.css";
import Command from "./Command";

interface QuestionProps {
  value: QuestionModel;
}

export default function Question(props: QuestionProps) {
  const question = props.value;

  return (
    <div className={styles.question}>
      <Command text={question.command} />
    </div>
  );
}
