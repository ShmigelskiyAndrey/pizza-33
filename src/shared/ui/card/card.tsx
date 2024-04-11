import styles from "./card.module.scss";
import { FC } from "react";
import Image from "next/image";
import { cn } from "@/shared/lib/classNames";

interface CardProps {
  ispizza: boolean;
  photo: string;
  title: string;
  description?: string;
  size: string;
  price: number;
  onClick: VoidFunction;
}

const Card: FC<CardProps> = (props): JSX.Element => {
  const imageClasses = cn(
    styles.pizzaImage,
    !props.ispizza && styles.bottleImage
  );
  const descriptionClasses = cn(
    styles.description,
    !props.ispizza && styles.nonDescription
  );
  return (
    <div className={styles.container}>
      <Image
        className={imageClasses}
        src={`/photo/${props.photo}`}
        width={props.ispizza ? 410 : 120}
        height={props.ispizza ? 410 : 338}
        alt="pizza photo"
      />
      <div className={styles.title}>{props.title}</div>
      <div className={descriptionClasses}>{props.description}</div>
      <div className={styles.options}>
        <div className={styles.size}>{props.size}</div>
        <div className={styles.price}>{props.price} руб</div>
      </div>
      <button className={styles.button} onClick={props.onClick}>
        В корзину
      </button>
    </div>
  );
};

export { Card };
