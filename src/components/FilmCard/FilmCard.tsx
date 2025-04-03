import { FC } from "react";
import { TFilm } from "../../types/TFilm";
import styles from "./_FilmCard.module.scss";
import filmDefaultBg from "../../assets/images/film-default-bg.png";
import { parseRating } from "../../utils/parseRating";
import { parseGenres } from "../../utils/parseGenres";
import { Link } from "react-router-dom";
import { handleScrollTop } from "../../utils/handleScrollTop";
import cn from "classnames";

type Props = {
  film: TFilm;
  anyStyles?: string;
};

export const FilmCard: FC<Props> = ({ film, anyStyles }) => {
  return (
    <div
      className={
        anyStyles ? cn(styles["film-card"], anyStyles) : styles["film-card"]
      }
    >
      <Link onClick={handleScrollTop} to={`/Cinema-Guide/movie/${film.id}`}>
        <img
          src={film.posterUrl || filmDefaultBg}
          alt={film.title}
          className={styles["film-card__img"]}
        />
        <div className={styles["film-card__info"]}>
          <span className={styles["film-card__title"]}>{film.title}</span>
          <span className={styles["film-card__rating"]}>
            {parseRating(film.tmdbRating)}
          </span>
          <span className={styles["film-card__content"]}>{`${
            film.releaseYear
          }, ${parseGenres(film.genres)} `}</span>
          <span
            className={styles["film-card__runtime"]}
          >{`${film.runtime} мин.`}</span>
        </div>
      </Link>
    </div>
  );
};
