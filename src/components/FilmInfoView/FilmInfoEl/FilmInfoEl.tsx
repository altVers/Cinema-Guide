import { FC } from "react";
import styles from './_FilmInfoEl.module.scss'

type Props = {
  field: string;
  text: string;
};

export const FilmInfoEl: FC<Props> = ({ field, text }) => {
  return (
    <div className={styles['film-info']}>
      <div className={styles['film-info__field-wrapper']}>
        <span className={styles['film-info__field']}>{field}</span>
        <span className={styles['film-info__buffer']}></span>
      </div>
      <span>{text}</span>
    </div>
  );
};
