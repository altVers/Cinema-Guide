import { FC } from "react";
import styles from "./_GenreCard.module.scss";
import { Link } from "react-router-dom";
import { handleScrollTop } from "../../utils/handleScrollTop";

type Props = {
  imgSrc: string;
  genre: string;
};

export const GenreCard: FC<Props> = ({ imgSrc, genre }) => {
  return (
    <Link onClick={handleScrollTop} to={`/Cinema-Guide/movie/genres/${genre}`}>
      <div className={styles["genre-card"]}>
        <img
          src={imgSrc}
          alt="Прьвью жанра"
          className={styles["genre-card__img"]}
        />
        <span className={styles["genre-card__title"]}>{genre}</span>
      </div>
    </Link>
  );
};
