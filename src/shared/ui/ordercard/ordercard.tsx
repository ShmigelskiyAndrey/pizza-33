import styles from "./ordercard.module.scss";
import Image from "next/image";

const Ordercard = () => {
  return (
    <>
      <div className={styles.container}>
        <Image
          className={styles.image}
          src="/photo/pizzaHam.png"
          width={178}
          height={178}
          alt="photo of product"
        />
        <div className={styles.info}>
          <div className={styles.name}>Цыпленок карри</div>
          <div className={styles.description}>
            Томатный соус, моцарелла, цыплёнок, зеленый перец, помидоры, соус
            карри
          </div>
          <div className={styles.counter}>
            <button className={styles.plus}>+</button>
            <button className={styles.minus}>-</button>
            <div className={styles.total}>1</div>
          </div>
        </div>
        <div className={styles.characteristic}>
          <div className={styles.sizechar}>
            <div className={styles.sizecircle}></div>
            <div className={styles.size}>36 см</div>
          </div>
          <div className={styles.price}>500 руб</div>
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
