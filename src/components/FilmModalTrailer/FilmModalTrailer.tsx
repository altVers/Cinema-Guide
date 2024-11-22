import { FC } from "react";
import styles from "./_FilmModalTrailer.module.scss";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

type Props = {
  id: string;
  handleModalClose: () => void;
  state: boolean;
};

export const FilmModalTrailer: FC<Props> = ({
  id,
  handleModalClose,
  state,
}) => {
  const closeModal = () => {
    handleModalClose();
  };

  return (
    <div
      className={state ? styles.trailer : styles["trailer--close"]}
      id="trailer-modal"
    >
      <iframe
        width="960"
        height="540"
        className={styles.trailer__iframe}
        src={`https://www.youtube.com/embed/${id}?enablejsapi=1&rel=0&modestbranding=1&color=white&mute=1`}
        allowFullScreen
        rel="0"
        id="player"
      />
      <div className={styles.trailer__btn}>
        <Button style="close" onClick={closeModal}>
          <Icon id="close" width="24" height="24" />
        </Button>
      </div>
    </div>
  );
};
