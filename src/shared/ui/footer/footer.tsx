import styles from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container} id="contacts">
      <p className={styles.phone}>+7 (903) 261-68-47 </p>
      <p className={styles.copyright}>Copyright @2018 pizza 33</p>
      <div className={styles.buttons}>
        <Link href="https://www.instagram.com/" target="_blank">
          {" "}
          <button className={styles.instagram}>
            {" "}
            <Image
              src="/icons/instagramicon.svg"
              width={30}
              height={30}
              alt="instagram logo"
            />
          </button>
        </Link>
        <Link href="https://web.tlgrm.app/" target="_blank">
          {" "}
          <button className={styles.telegram}>
            {" "}
            <Image
              src="/icons/telegramicon.svg"
              width={30}
              height={30}
              alt="telegram logo"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export { Footer };
