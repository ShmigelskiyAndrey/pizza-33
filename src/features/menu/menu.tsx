import styles from "./menu.module.scss";
import { Card } from "../../shared/ui/card/card";
import { MENU } from "./constants";

const Menu = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Menu</p>

      <div className={styles.navbar}>
        <button>Все товары</button>
        <button>Пиццы</button>
        <button>Напитки</button>
        <button>Акции</button>
      </div>

      <div className={styles.cards}>
        {MENU.map((item) => (
          <Card
            key={item.description}
            ispizza={item.ispizza}
            title={item.title}
            description={item.description ? item.description : ""}
            size={item.size}
            price={item.price}
            photo={item.photo}
          />
        ))}
      </div>
    </div>
  );
};

export { Menu };
