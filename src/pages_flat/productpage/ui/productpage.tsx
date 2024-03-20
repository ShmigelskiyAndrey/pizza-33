import styles from "./productpage.module.scss";
import { Product } from "../../../shared/ui/product/product";

const Productpage = () => {
  return (
    <div className={styles.container}>
      <Product></Product>
    </div>
  );
};

export { Productpage };
