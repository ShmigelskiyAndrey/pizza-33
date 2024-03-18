import styles from "./aboutcard.module.scss";
import { FC } from "react";

interface CardProps {
  number: number;
  title: string;
  description: string;
}

const Aboutcard: FC<CardProps> = (props): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.number}>{props.number}</div>
      <div className={styles.text}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.subText}>{props.description}</div>
      </div>
    </div>
  );
};
export { Aboutcard };
