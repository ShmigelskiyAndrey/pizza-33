import Link from "next/link";
import styles from "./cartSticky.module.scss";
import Image from "next/image";
import { useAppSelector } from "@/shared/lib/redux";
import { selectIsCartNotEmpty } from "@/features/menu/model/selectors";
import { useInterSection } from "@/shared/lib/useInterSection";

const CartSticky = () => {
  const isNotEmpty = useAppSelector(selectIsCartNotEmpty);
  const isVisible = useInterSection("#cart", {
    rootMargin: "0px",
    threshold: 0,
  });
  if (isVisible) {
    return null;
  }
  return (
    <div className={styles.cart}>
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

export { CartSticky };
