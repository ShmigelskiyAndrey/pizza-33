import styles from "./aboutsecondblock.module.scss";
import { Aboutcard } from "../aboutcard/aboutcard";
import { CARDS } from "./constants";

const Aboutsecondblock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Наши три кита</div>
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
    </div>
  );
};
export { Aboutsecondblock };
