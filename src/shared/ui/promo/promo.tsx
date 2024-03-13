import styles from "./promo.module.scss";
import Image from "next/image";

const Promo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.mainText}>
          <p className={styles.offer}>Получите скидку на первый заказ!</p>
          <p className={styles.sum}>33%</p>
        </div>

        <div className={styles.secondText}>
          <p className={styles.title}>Подробнее смотрите</p>
          <button className={styles.button}>здесь</button>
        </div>
      </div>

      <div className={styles.photo}>
        <Image
          className={styles.image}
          src="/photo/promoPhoto.png"
          width={505}
          height={696}
          alt="photo of pizza"
        />
      </div>

      <div className={styles.secondTextAlt}>
        <p className={styles.title}>Подробнее смотрите</p>
        <button className={styles.button}>здесь</button>
      </div>
    </div>
  );
};

export { Promo };
