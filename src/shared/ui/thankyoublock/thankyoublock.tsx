import styles from "./thankyoublock.module.scss";
import Image from "next/image";
import { cn } from "@/shared/lib/classNames";
import { Shantell_Sans } from "next/font/google";
import { CabageIcon } from "../icons/CabageIcon";
import Link from "next/link";

const shantellSans = Shantell_Sans({
  weight: "400",
  subsets: ["latin"],
});

const Thankyoublock = () => {
  const titleClass = cn(shantellSans.className, styles.title);
  const firstButton = cn(styles.button, styles.firstButton);
  const secondButton = cn(styles.button, styles.secondButton);
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={titleClass}>Спасибо за заказ!</div>
        <div className={styles.subtitle}>
          С течение 5 минут Вам позвонит наш менеджер на указанный номер
          телефона для подтверждения заказа.
        </div>
        <Link href="/">
          <button className={firstButton}>Вернуться на главную</button>
        </Link>
      </div>
      <div className={styles.imagediv}>
        <Image
          className={styles.image}
          src="/photo/thankyouphoto.png"
          width={620}
          height={837}
          alt="photo of worker making pizza"
        />
      </div>
      <Link href="/" className={styles.link}>
        <button className={secondButton}>Вернуться на главную</button>
      </Link>
      <div className={styles.backgroungImages}>
        <CabageIcon className={styles.cabage}></CabageIcon>
      </div>
    </div>
  );
};

export { Thankyoublock };
