import styles from "./footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.phone}>+7 (903) 261-68-47 </p>
      <p className={styles.copyright}>Copyright @2018 pizza 33</p>
      <div className={styles.buttons}>
        <button className={styles.instagram}>
          {" "}
          <Image
            src="/icons/instagramicon.svg"
            width={30}
            height={30}
            alt="instagram logo"
          />
        </button>
        <button className={styles.telegram}>
          {" "}
          <Image
            src="/icons/telegramicon.svg"
            width={30}
            height={30}
            alt="telegram logo"
          />
        </button>
      </div>
    </div>
  );
};

export { Footer };
