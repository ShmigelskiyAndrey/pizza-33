"use client";

import styles from "./menu.module.scss";
import { Card } from "../../shared/ui/card/card";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux";
import { adder, devide, pizza } from "./model/menuSlice";
import { selectMenuItemsByFilter } from "./model/selectors";
import { setFilter } from "./model/filterSlice";

const Menu = () => {
  const data = useAppSelector(selectMenuItemsByFilter);
  const dispatch = useAppDispatch();

  const devideHandler = () => {
    dispatch(devide());
  };

  const addHendler = () => {
    dispatch(
      adder({
        ispizza: true,
        title: "Морская",
        description:
          "Томатный соус, креветки, мидии, грецкие орехи, морские водоросли, моцарелла",
        size: "33 см",
        price: "500",
        photo: "pizzaSea.png",
      })
    );
  };

  const sortPizzaHandler = () => {
    dispatch(pizza());
  };

  const chengeFiltersHandler = () => {
    dispatch(setFilter(""));
  };

  return (
    <div className={styles.container}>
      <button onClick={devideHandler}>asdasda</button>
      <button onClick={addHendler}>pizdec</button>
      <p className={styles.title}>Menu</p>

      <div className={styles.navbar}>
        <button onClick={() => dispatch(setFilter(""))}>Все товары</button>
        <button onClick={() => dispatch(setFilter("pizza"))}>Пиццы</button>
        <button onClick={() => dispatch(setFilter("drink"))}>Напитки</button>
        <button onClick={() => dispatch(setFilter(""))}>Акции</button>
      </div>

      <div className={styles.cards}>
        {data.map((item) => (
          <Card
            key={item.photo}
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
