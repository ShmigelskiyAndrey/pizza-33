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
  price: string;
}

const Card: FC<CardProps> = (props): JSX.Element => {
  const imageClasses = cn(
    styles.pizzaImage,
    !props.ispizza && styles.bottleImage
  );
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <Image
          className={imageClasses}
          src={`/photo/${props.photo}`}
          width={props.ispizza ? 410 : 120}
          height={props.ispizza ? 410 : 338}
          alt="pizza photo"
        />
      </div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.options}>
        <div className={styles.size}>{props.size}</div>
        <div className={styles.price}>{props.price} руб</div>
      </div>
      <button className={styles.button}>В корзину</button>
    </div>
  );
};

export { Card };
