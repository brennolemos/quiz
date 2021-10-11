import AnswerModel from "../model/answer";
import styles from "../styles/Answer.module.css";

interface AnswerProps {
  value: AnswerModel;
  index: number;
  option: string;
  backgroundColor: string;
  onResponse: (index: number) => void;
}

export default function Answer(props: AnswerProps) {
  const answer = props.value;

  return (
    <div
      className={styles.answer}
      onClick={() => props.onResponse(props.index)}
    >
      <div className={styles.answerContent}>
        {answer.revealed ? (
          <div className={styles.back}>
            {answer.correct ? (
              <div className={styles.right}>
                <div>The answer is correct...</div>
                <div className={styles.value}>{answer.value}</div>
              </div>
            ) : (
              <div className={styles.wrong}>
                <div>The answer is wrong...</div>
                <div className={styles.value}>{answer.value}</div>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.front}>
            <div
              className={styles.option}
              style={{ backgroundColor: props.backgroundColor }}
            >
              {props.option}
            </div>
            <div className={styles.value}>{answer.value}</div>
          </div>
        )}
      </div>
    </div>
  );
}
