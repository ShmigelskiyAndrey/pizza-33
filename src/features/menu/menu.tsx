"use client";

import styles from "./menu.module.scss";
import { Card } from "../../shared/ui/card/card";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux";
import { adder, devide, pizza } from "./model/menuSlice";
import { selectMenuItemsByFilter } from "./model/selectors";
import { setFilter } from "./model/filterSlice";
import { Shantell_Sans } from "next/font/google";
import { cn } from "@/shared/lib/classNames";
import { TomatoIcon } from "@/shared/ui/icons/TomatoIcon";
import { CabageIcon } from "@/shared/ui/icons/CabageIcon";
import { CarrotIcon } from "@/shared/ui/icons/CarrotIcon";
import { EggplantIcon } from "@/shared/ui/icons/EggplantIcon";
import { OnionIcon } from "@/shared/ui/icons/OnionIcon";

const shantellSans = Shantell_Sans({
  weight: "400",
  subsets: ["latin"],
});

const Menu = () => {
  const titleClass = cn(shantellSans.className, styles.title);
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
      {/* <button onClick={devideHandler}>asdasda</button>
      <button onClick={addHendler}>pizdec</button> */}
      <p className={titleClass}>Меню</p>

      <div className={styles.navbar}>
        <button onClick={() => dispatch(setFilter(""))} className={styles.btn}>
          Все товары
        </button>
        <button
          onClick={() => dispatch(setFilter("pizza"))}
          className={styles.btn}
        >
          Пиццы
        </button>
        <button
          onClick={() => dispatch(setFilter("drink"))}
          className={styles.btn}
        >
          Напитки
        </button>
        <button onClick={() => dispatch(setFilter(""))} className={styles.btn}>
          Акции
        </button>
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
      <div className={styles.bgIcons}>
        <OnionIcon className={styles.onion}></OnionIcon>
        <EggplantIcon className={styles.eggplant}></EggplantIcon>
        <TomatoIcon className={styles.tomato}></TomatoIcon>
        <CarrotIcon className={styles.carrot}></CarrotIcon>
        <CarrotIcon className={styles.carrot2}></CarrotIcon>
        <CabageIcon className={styles.cabage}></CabageIcon>
        <TomatoIcon className={styles.tomato2}></TomatoIcon>
        <OnionIcon className={styles.onion2}></OnionIcon>
      </div>
    </div>
  );
};

export { Menu };
