import { FC } from "react";
import Icons from "../../assets/svg/sprite.svg";

interface Props {
  id: string;
  width?: string;
  height?: string;
}

export const Icon: FC<Props> = ({ id, width, height }) => {
  return (
    <svg style={{ width: width, height: height }}>
      <use href={Icons + "#icon-" + id}></use>
    </svg>
  );
};
