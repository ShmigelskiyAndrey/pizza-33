import Link from "next/link";
import styles from "./cart.module.scss";
import Image from "next/image";
import { useAppSelector } from "@/shared/lib/redux";
import { selectIsCartNotEmpty } from "@/features/menu/model/selectors";

const Cart = () => {
  const isNotEmpty = useAppSelector(selectIsCartNotEmpty);
  return (
    <div className={styles.cart} id="cart">
      <Link href="/order">
        <button className={styles.cartIcon}>
          <Image
            src="/icons/carticon.svg"
            width={28}
            height={33}
            alt="cart icon"
          />
        </button>
        {isNotEmpty && <div className={styles.cartStatus}></div>}
      </Link>
    </div>
  );
};

export { Cart };
