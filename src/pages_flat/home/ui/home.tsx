"use client";

import styles from "./home.module.scss";
import { Firstblock } from "../../../shared/ui/firstblock/firstblock";
import { Footer } from "../../../shared/ui/footer/footer";
import { Menu } from "../../../features/menu/menu";
import { Promo } from "../../../shared/ui/promo/promo";
import { CartSticky } from "@/shared/ui/cartSticky/cartSticky";
import { useAppDispatch } from "@/shared/lib/redux";
import { useEffect } from "react";
import { fetchProducts } from "@/features/menu/model/menuSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
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
