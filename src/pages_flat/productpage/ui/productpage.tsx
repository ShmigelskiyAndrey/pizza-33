"use client";

import { Footer } from "@/shared/ui/footer/footer";
import { Product } from "../../../shared/ui/product/product";

const Productpage = () => {
  return (
    <div className="container">
      <Product></Product>
      <Footer></Footer>
    </div>
  );
};

export { Productpage };
