import styles from "./aboutcard.module.scss";
import { FC } from "react";
import localFont from "next/font/local";
import { cn } from "@/shared/lib/classNames";

const poetseone = localFont({
  src: "../../../../public/fonts/PoetsenOne-Regular.otf",
});

interface CardProps {
  number: number;
  title: string;
  description: string;
}

const Aboutcard: FC<CardProps> = (props): JSX.Element => {
  const numberClass = cn(poetseone.className, styles.number);
  return (
    <div className={styles.container}>
      <div className={numberClass}>{props.number}</div>
      <div className={styles.text}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.subText}>{props.description}</div>
      </div>
    </div>
  );
};
export { Aboutcard };
