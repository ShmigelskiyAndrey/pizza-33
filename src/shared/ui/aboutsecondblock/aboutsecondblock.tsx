import styles from "./aboutsecondblock.module.scss";
import { Aboutcard } from "../aboutcard/aboutcard";
import { CARDS } from "./constants";
import { Shantell_Sans } from "next/font/google";
import { cn } from "@/shared/lib/classNames";
import { WhaleIcon } from "../icons/WhaleIcon";

const shantellSans = Shantell_Sans({
  weight: "400",
  subsets: ["latin"],
});

const Aboutsecondblock = () => {
  const titleClass = cn(shantellSans.className, styles.title);
  return (
    <div className={styles.container}>
      <div className={titleClass}>Наши три кита</div>
      <div className={styles.cards}>
        {CARDS.map((item) => (
          <Aboutcard
            key={item.description}
            number={item.number}
            title={item.title}
            description={item.description}
          ></Aboutcard>
        ))}
      </div>
      <button className={styles.button}>Вернуться на главную</button>
      <div className={styles.backgroungImages}>
        <WhaleIcon className={styles.whale}></WhaleIcon>
      </div>
    </div>
  );
};
export { Aboutsecondblock };
