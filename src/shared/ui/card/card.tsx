import styles from "./card.module.scss";
import { FC, SyntheticEvent } from "react";
import Image from "next/image";
import { cn } from "@/shared/lib/classNames";
import { selectCountById } from "@/features/menu/model/selectors";
import { useAppSelector } from "@/shared/lib/redux";
import Link from "next/link";

interface CardProps {
  id: number;
  ispizza: boolean;
  photo: string;
  title: string;
  description?: string;
  size: string;
  price: number;
  onClick: (e: SyntheticEvent) => void;
  onIncrement: (e: SyntheticEvent) => void;
  onDecrement: (e: SyntheticEvent) => void;
}

const Card: FC<CardProps> = (props): JSX.Element => {
  const count = useAppSelector(selectCountById(props.id));

  const imageClasses = cn(
    styles.pizzaImage,
    !props.ispizza && styles.bottleImage
  );
  const descriptionClasses = cn(
    styles.description,
    !props.ispizza && styles.nonDescription
  );
  return (
    <Link href={`/product/${props.id}`} className={styles.container}>
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
      {count ? (
        <div className={styles.counter}>
          <button className={styles.decrement} onClick={props.onDecrement}>
            -
          </button>
          <button className={styles.increment} onClick={props.onIncrement}>
            +
          </button>
          <div className={styles.count}>{count}</div>
        </div>
      ) : (
        <button className={styles.button} onClick={props.onClick}>
          В корзину
        </button>
      )}
    </Link>
  );
};

export { Card };
