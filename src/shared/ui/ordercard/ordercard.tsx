import styles from "./ordercard.module.scss";
import Image from "next/image";
import { cn } from "@/shared/lib/classNames";

interface CardProps {
  onIncrement?: VoidFunction;
  onDecrement?: VoidFunction;
  onKick?: VoidFunction;
  photo: string;
  title: string;
  description?: string;
  size: string;
  price: number;
  count?: number;
}

const Ordercard = (props: CardProps) => {
  const counterClass = cn(styles.counter, styles.counterBottle);
  return (
    <>
      <div className={styles.container}>
        <Image
          priority={true}
          className={styles.image}
          src={`/photo/${props.photo}`}
          width={178}
          height={178}
          alt="photo of product"
        />
        <div className={styles.info}>
          <div className={styles.name}>{props.title}</div>
          <div className={styles.description}>{props.description}</div>
          <div className={props.description ? styles.counter : counterClass}>
            <button className={styles.minus} onClick={props.onDecrement}>
              -
            </button>
            <button className={styles.plus} onClick={props.onIncrement}>
              +
            </button>
            <div className={styles.total}>{props.count}</div>
          </div>
        </div>
        <div className={styles.characteristic}>
          <div className={styles.sizechar}>
            <div className={styles.sizecircle}></div>
            <div className={styles.size}>{props.size}</div>
          </div>
          <div className={styles.price}>{props.price} руб</div>
        </div>
        <div className={styles.close}>
          <button className={styles.closebtn} onClick={props.onKick}>
            <Image
              className={styles.closeicon}
              src="/icons/closebutton.svg"
              width={26}
              height={26}
              alt="close button"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export { Ordercard };
