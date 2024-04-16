"use client";

import styles from "./home.module.scss";
import { Firstblock } from "../../../shared/ui/firstblock/firstblock";
import { Footer } from "../../../shared/ui/footer/footer";
import { Menu } from "../../../features/menu/menu";
import { Promo } from "../../../shared/ui/promo/promo";
import { CartSticky } from "@/shared/ui/cartSticky/cartSticky";

const Home = () => {
  return (
    <div className={styles.container}>
      <CartSticky></CartSticky>
      <Firstblock></Firstblock>
      <Menu></Menu>
      <Promo></Promo>
      <Footer></Footer>
    </div>
  );
};

export { Home };
