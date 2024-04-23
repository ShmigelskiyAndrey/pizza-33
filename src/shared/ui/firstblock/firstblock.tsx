import styles from "./firstblock.module.scss";
import { Header } from "../header/header";
import { cn } from "@/shared/lib/classNames";
import localFont from "next/font/local";
import Link from "next/link";
import { Spinner } from "../spinner/spinner";

const poetseone = localFont({
  src: "../../../../public/fonts/PoetsenOne-Regular.otf",
});

const Firstblock = () => {
  const titleClass = cn(poetseone.className, styles.title);
  const subtitleClass = cn(poetseone.className, styles.subtitle);
  return (
    <div>
      <Header ismainpage={true} isMainPageSelected={true}></Header>
      <div className={styles.container}>
        <div className={titleClass}>Наслаждайтесь нашей фирменной пиццей </div>
        <div className={subtitleClass}>Скидка 30% на первый заказ</div>
        <Link href="#menu">
          <button className={styles.button}>Заказать</button>
        </Link>
      </div>
    </div>
  );
};
export { Firstblock };
