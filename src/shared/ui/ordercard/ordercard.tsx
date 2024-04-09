import styles from "./ordercard.module.scss";
import Image from "next/image";

interface CardProps {
  photo: string;
  title: string;
  description?: string;
  size: string;
  price: string;
  count?: number;
}

const Ordercard = (props: CardProps) => {
  return (
    <>
      <div className={styles.container}>
        <Image
          className={styles.image}
          src={`/photo/${props.photo}`}
          width={178}
          height={178}
          alt="photo of product"
        />
        <div className={styles.info}>
          <div className={styles.name}>{props.title}</div>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.counter}>
            <button className={styles.plus}>+</button>
            <button className={styles.minus}>-</button>
            <div className={styles.total}>{props.count}</div>
          </div>
        </div>
        <div className={styles.characteristic}>
          <div className={styles.sizechar}>
            <div className={styles.sizecircle}></div>
            <div className={styles.size}>{props.size}</div>
          </div>
          <div className={styles.price}>{props.price}</div>
        </div>
        <div className={styles.close}>
          <button className={styles.closebtn}>
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
