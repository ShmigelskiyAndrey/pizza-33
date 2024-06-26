import styles from "./promo.module.scss";
import Image from "next/image";
import { cn } from "@/shared/lib/classNames";
import localFont from "next/font/local";
import { EggplantIcon } from "../icons/EggplantIcon";
import { CarrotIcon } from "../icons/CarrotIcon";
import Link from "next/link";
import { CurvedLineIcon } from "../icons/CurvedLine";

const poetseone = localFont({
  src: "../../../../public/fonts/PoetsenOne-Regular.otf",
});

const Promo = () => {
  const offerClass = cn(poetseone.className, styles.offer);
  const sumClass = cn(poetseone.className, styles.sum);
  return (
    <div className={styles.container} id="promo">
      <div className={styles.text}>
        <div className={styles.mainText}>
          <p className={offerClass}>Получите скидку на первый заказ!</p>
          <p className={sumClass}>33%</p>
        </div>
        <CurvedLineIcon className={styles.line}></CurvedLineIcon>
        <div className={styles.secondText}>
          <p className={styles.title}>Подробнее смотрите</p>
          <button className={styles.button}>
            <Link href="/about">здесь</Link>
          </button>
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
        <button className={styles.button}>
          <Link href="/about">здесь</Link>
        </button>
      </div>
      <div className={styles.backgroungImages}>
        <EggplantIcon className={styles.eggplant}></EggplantIcon>
        <CarrotIcon className={styles.carrot}></CarrotIcon>
      </div>
    </div>
  );
};

export { Promo };
