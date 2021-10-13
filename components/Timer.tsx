import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../styles/Timer.module.css";

interface TimerProps {
  duration: number;
  onComplete: () => void;
}

export default function Timer(props: TimerProps) {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        size={120}
        isPlaying
        duration={props.duration}
        onComplete={props.onComplete}
        colors={[
          ["#bce596", 0.33],
          ["#f7b801", 0.33],
          ["#ed827a", 0.33],
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
