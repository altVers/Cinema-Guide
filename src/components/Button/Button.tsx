import { FC } from "react";
import styles from "./_Button.module.scss";

interface Props {
  children: React.ReactNode;
  style?: "secondary" | "noBg" | "icon" | "close";
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "reset" | "submit" | undefined;
  anyStyle?: string;
}

export const Button: FC<Props> = ({
  children,
  style,
  onClick,
  type = "button",
  anyStyle,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${style? `${styles[`btn--${style}`]}` : ""} ${anyStyle}`}
    >
      {children}
    </button>
  );
};
