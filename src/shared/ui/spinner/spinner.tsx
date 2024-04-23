import styles from "./spinner.module.scss";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
  return (
    <div className={styles.container}>
      <ClipLoader
        color={"#FF9D57"}
        loading={true}
        size={100}
        aria-label="Loading Spinner"
      ></ClipLoader>
    </div>
  );
};

export { Spinner };
