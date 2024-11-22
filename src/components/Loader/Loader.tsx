import { FC } from "react";
import styles from "./Loader.module.css";

export const Loader: FC = () => {
  return (
    <div className={styles["loader-wrapper"]}>
      <span className={styles.loader}></span>
    </div>
  );
};
