import styles from "../styles/Command.module.css";

interface CommandProps {
  text: string;
}

export default function Command(props: CommandProps) {
  return (
    <div className={styles.command}>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
