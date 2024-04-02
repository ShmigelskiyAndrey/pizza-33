import styles from "./thankyoublock.module.scss";
import Image from "next/image";
import { cn } from "@/shared/lib/classNames";
import { Shantell_Sans } from "next/font/google";

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
        <button className={firstButton}>Вернуться на главную</button>
      </div>
      <div>
        <Image
          className={styles.image}
          src="/photo/thankyouphoto.png"
          width={620}
          height={837}
          alt="photo of worker making pizza"
        />
      </div>
      <button className={secondButton}>Вернуться на главную</button>
    </div>
  );
};

export { Thankyoublock };
