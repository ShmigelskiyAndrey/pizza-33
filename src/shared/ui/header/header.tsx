"use client";

import styles from "./header.module.scss";
import Image from "next/image";
import { FC, useState } from "react";
import { cn } from "@/shared/lib/classNames";
import localFont from "next/font/local";
import { CloseIcon } from "../icons/CloseIcon";
import { Footer } from "../footer/footer";

interface HeaderProps {
  ismainpage: boolean;
}

const poetseone = localFont({
  src: "../../../../public/fonts/PoetsenOne-Regular.otf",
});

const Header: FC<HeaderProps> = (props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const containerClasses = cn(
    styles.container,
    !props.ismainpage && styles.notMain
  );

  const logoTextClass = cn(poetseone.className, styles.logoName);
  return (
    <div className={containerClasses}>
      <div className={styles.contactInformation}>
        <div className={styles.phoneNumber}>+7 (903) 261-68-47</div>
        <div className={styles.openTime}>24/7</div>
      </div>

      <div className={styles.navbar}>
        <div className={styles.logo}>
          <div className={logoTextClass}>Pizza 33</div>
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
          <div className={styles.home}>ГЛАВНАЯ</div>
          <div className={styles.about}>О НАС</div>
          <div className={styles.promotion}>АКЦИИ</div>
          <div className={styles.contacts}>КОНТАКТЫ</div>
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
      <div className={isOpen ? styles.burgerMenuOpen : styles.burgerMenu}>
        {isOpen ? (
          <div className={styles.menuContainer}>
            <CloseIcon
              className={styles.closeIcon}
              onClick={handleClick}
            ></CloseIcon>
            <div className={styles.menuText}>
              <div className={styles.navigationMob}>
                <div className={styles.homeMob}>ГЛАВНАЯ</div>
                <div className={styles.aboutMob}>О НАС</div>
                <div className={styles.promotionMob}>АКЦИИ</div>
                <div className={styles.contactsMob}>КОНТАКТЫ</div>
              </div>

              <Footer></Footer>
            </div>
          </div>
        ) : (
          <button className={styles.burgerButton} onClick={handleClick}>
            <Image
              className={styles.burgerIcon}
              src="/icons/burgermenuicon.svg"
              width={60}
              height={59}
              alt="cart icon"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export { Header };
