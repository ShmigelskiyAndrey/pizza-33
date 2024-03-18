import styles from "./firstblock.module.scss";
import { Header } from "../header/header";

const Firstblock = () => {
  return (
    <div>
      <Header ismainpage={true}></Header>
      <div className={styles.container}>
        <div className={styles.title}>
          Наслаждайтесь нашей фирменной пиццей{" "}
        </div>
        <div className={styles.subtitle}>Скидка 30% на первый заказ</div>
        <button className={styles.button}>Заказать</button>
      </div>
    </div>
  );
};
export { Firstblock };
