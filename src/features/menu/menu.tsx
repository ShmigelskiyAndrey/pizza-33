"use client";

import styles from "./menu.module.scss";
import { Card } from "../../shared/ui/card/card";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux";
import { add, decrement, increment } from "./model/orderSlice";
import { selectFilter, selectMenuItemsByFilter } from "./model/selectors";
import { filterReducer, setFilter } from "./model/filterSlice";
import { Shantell_Sans } from "next/font/google";
import { cn } from "@/shared/lib/classNames";
import { TomatoIcon } from "@/shared/ui/icons/TomatoIcon";
import { CabageIcon } from "@/shared/ui/icons/CabageIcon";
import { CarrotIcon } from "@/shared/ui/icons/CarrotIcon";
import { EggplantIcon } from "@/shared/ui/icons/EggplantIcon";
import { OnionIcon } from "@/shared/ui/icons/OnionIcon";
import Link from "next/link";
import { UnderlineIcon } from "@/shared/ui/icons/UnderlineIcon";
import { FILTERS } from "./constants";

const shantellSans = Shantell_Sans({
  weight: "400",
  subsets: ["latin"],
});

const Menu = () => {
  const titleClass = cn(shantellSans.className, styles.title);
  const data = useAppSelector(selectMenuItemsByFilter);
  const activeFilter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();
  console.log(data);

  return (
    <div className={styles.container} id="menu">
      <p className={titleClass}>Меню</p>

      <div className={styles.navbar}>
        {FILTERS.map((el, index) => {
          const clasess = cn(
            styles.btn,
            el.filter === activeFilter && styles.activeBtn
          );
          return (
            <button
              onClick={() => dispatch(setFilter(el.filter))}
              className={clasess}
              key={index}
            >
              {el.title}
            </button>
          );
        })}

        <button className={styles.btn}>
          <Link href="#promo">Акции</Link>
        </button>
      </div>

      <div className={styles.cards}>
        {data?.map((item) => (
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
