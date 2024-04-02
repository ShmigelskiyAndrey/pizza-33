import styles from "./promo.module.scss";
import Image from "next/image";
import { cn } from "@/shared/lib/classNames";
import localFont from "next/font/local";

const poetseone = localFont({
  src: "../../../../public/fonts/PoetsenOne-Regular.otf",
});

const Promo = () => {
  const offerClass = cn(poetseone.className, styles.offer);
  const sumClass = cn(poetseone.className, styles.sum);
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.mainText}>
          <p className={offerClass}>Получите скидку на первый заказ!</p>
          <p className={sumClass}>33%</p>
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
