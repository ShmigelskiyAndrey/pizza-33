import styles from "./header.module.scss";
import Image from "next/image";
import { FC } from "react";
import { cn } from "@/shared/lib/classNames";

interface HeaderProps {
  ismainpage: boolean;
}

const Header: FC<HeaderProps> = (props): JSX.Element => {
  const containerClasses = cn(
    styles.container,
    !props.ismainpage && styles.notMain
  );
  return (
    <div className={containerClasses}>
      <div className={styles.contactInformation}>
        <div className={styles.phoneNumber}>+7 (903) 261-68-47</div>
        <div className={styles.openTime}>24/7</div>
      </div>

      <div className={styles.navbar}>
        <div className={styles.logo}>
          <div className={styles.logoName}>Pizza 33</div>
          <div className={styles.logoIcon}>
            {" "}
            <Image
              className={styles.logoImage}
              src="/icons/logoicon.svg"
              width={34}
              height={37}
              alt="logo"
            />
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.home}>главная</div>
          <div className={styles.about}>о нас</div>
          <div className={styles.promotion}>акции</div>
          <div className={styles.contacts}>контакты</div>
        </div>
      </div>

      <div className={styles.cart}>
        <button className={styles.cartIcon}>
          <Image
            src="/icons/carticon.svg"
            width={28}
            height={33}
            alt="cart icon"
          />
        </button>
        <div className={styles.cartStatus}></div>
      </div>

      <div className={styles.burgerMenu}>
        <button className={styles.burgerButton}>
          {" "}
          <Image
            className={styles.burgerIcon}
            src="/icons/burgermenuicon.svg"
            width={60}
            height={59}
            alt="cart icon"
          />
        </button>
      </div>
    </div>
  );
};

export { Header };
