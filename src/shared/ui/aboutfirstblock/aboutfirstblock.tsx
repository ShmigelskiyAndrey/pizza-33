import styles from "./aboutfirstblock.module.scss";
import Image from "next/image";
import { Header } from "../header/header";
import { Shantell_Sans } from "next/font/google";
import { cn } from "@/shared/lib/classNames";
import { TomatoIcon } from "../icons/TomatoIcon";
import { OnionIcon } from "../icons/OnionIcon";

const shantellSans = Shantell_Sans({
  weight: "400",
  subsets: ["latin"],
});

const Aboutfirstblock = () => {
  const titleClass = cn(shantellSans.className, styles.title);
  return (
    <>
      <Header ismainpage={false}></Header>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={titleClass}>О нас</div>
          <div className={styles.subtitle}>
            Добро пожаловать в уютное пространство настоящего вкуса и истинной
            итальянской гостеприимности! Наша пиццерия — это не просто место,
            где можно насладиться великолепной пиццей, это опыт, который мы
            создаем с любовью и страстью к еде.
          </div>
        </div>
        <div className={styles.images}>
          <Image
            className={styles.image}
            src="/photo/picture1.png"
            width={145}
            height={624}
            alt="photo of dough"
          />
          <Image
            className={styles.image}
            src="/photo/picture2.png"
            width={145}
            height={624}
            alt="photo of person holding pizza"
          />
          <Image
            className={styles.image}
            src="/photo/picture3.png"
            width={145}
            height={624}
            alt="photo of backing pizza"
          />
          <Image
            className={styles.image}
            src="/photo/picture4.png"
            width={145}
            height={624}
            alt="photo of pizza"
          />
        </div>
        <div className={styles.backgroungImages}>
          <TomatoIcon className={styles.tomato}></TomatoIcon>
          <OnionIcon className={styles.onion}></OnionIcon>
        </div>
      </div>
    </>
  );
};
export { Aboutfirstblock };
