import styles from "./product.module.scss";
import { Header } from "../header/header";
import Image from "next/image";
import { cn } from "@/shared/lib/classNames";
import { Shantell_Sans } from "next/font/google";
import { TomatoIcon } from "../icons/TomatoIcon";
import { OnionIcon } from "../icons/OnionIcon";
import { CarrotIcon } from "../icons/CarrotIcon";

const shantellSans = Shantell_Sans({
  weight: "400",
  subsets: ["latin"],
});

const Product = () => {
  const titleClass = cn(shantellSans.className, styles.title);
  return (
    <>
      <Header ismainpage={false}></Header>
      <div className={styles.container}>
        <div className={styles.product}>
          <div className={titleClass}>С пармской ветчиной</div>
          <Image
            className={styles.image}
            src="/photo/pizzaHam.png"
            width={568}
            height={568}
            alt="photo of pizza"
          />
        </div>
        <div className={styles.description}>
          <div className={styles.composition}>
            Сливочный соус, пармская ветчина, томаты черри, груша, руккола,
            моцарелла
          </div>
          <div className={styles.feature}>
            <div className={styles.weight}>Вес: 425 г</div>
            <div className={styles.bju}>КБЖУ на 100 г: 160/8/5.5/19</div>
            <div className={styles.size}>Размер: 36 см</div>
          </div>
          <div className={styles.price}>500 руб</div>
          <button className={styles.button}>В корзину</button>
        </div>
        <div className={styles.backgroungImages}>
          <TomatoIcon className={styles.tomato}></TomatoIcon>
          <OnionIcon className={styles.onion}></OnionIcon>
          <CarrotIcon className={styles.carrot}></CarrotIcon>
          <CarrotIcon className={styles.carrot2}></CarrotIcon>
        </div>
      </div>
    </>
  );
};

export { Product };
