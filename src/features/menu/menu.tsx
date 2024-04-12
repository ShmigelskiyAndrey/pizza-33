"use client";

import styles from "./menu.module.scss";
import { Card } from "../../shared/ui/card/card";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux";
import { adder, devide, pizza } from "./model/menuSlice";
import { add, decrement, increment } from "./model/orderSlice";
import { selectMenuItemsByFilter } from "./model/selectors";
import { setFilter } from "./model/filterSlice";
import { Shantell_Sans } from "next/font/google";
import { cn } from "@/shared/lib/classNames";
import { TomatoIcon } from "@/shared/ui/icons/TomatoIcon";
import { CabageIcon } from "@/shared/ui/icons/CabageIcon";
import { CarrotIcon } from "@/shared/ui/icons/CarrotIcon";
import { EggplantIcon } from "@/shared/ui/icons/EggplantIcon";
import { OnionIcon } from "@/shared/ui/icons/OnionIcon";
import Link from "next/link";

const shantellSans = Shantell_Sans({
  weight: "400",
  subsets: ["latin"],
});

const Menu = () => {
  const titleClass = cn(shantellSans.className, styles.title);
  const data = useAppSelector(selectMenuItemsByFilter);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container} id="menu">
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
        <button className={styles.btn}>
          <Link href="#promo">Акции</Link>
        </button>
      </div>

      <div className={styles.cards}>
        {data.map((item) => (
          <Card
            id={item.id}
            key={item.photo}
            ispizza={item.ispizza}
            title={item.title}
            description={item.description ? item.description : ""}
            size={item.size}
            price={item.price}
            photo={item.photo}
            onClick={(e) => {
              e.preventDefault();
              dispatch(add(item));
            }}
            onIncrement={(e) => {
              e.preventDefault();
              dispatch(increment(item.id));
            }}
            onDecrement={(e) => {
              e.preventDefault();
              dispatch(decrement(item.id));
            }}
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
