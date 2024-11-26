import { FC } from "react";
import { TFilm } from "../../types/TFilm";
import styles from "./_FilmCardSearch.module.scss";
import defaultBg from "../../assets/images/film-default-bg.png";
import { RatingIcon } from "../RatingIcon/RatingIcon";
import { parseRating } from "../../utils/parseRating";
import { parseGenres } from "../../utils/parseGenres";
import { parseRuntime } from "../../utils/parseRuntime";
import { Link } from "react-router-dom";
import { handleScrollTop } from "../../utils/handleScrollTop";

type Props = {
  film: TFilm;
};

export const FilmCardSearch: FC<Props> = ({ film }) => {

  return (
    <Link onClick={handleScrollTop} to={`/movie/${film.id}`}>
      <div className={styles["film-search"]}>
        <img
          className={styles["film-search__img"]}
          src={film.posterUrl || defaultBg}
          alt="Обложка фильма"
        />
        <div className={styles["film-search__content"]}>
          <ul className={styles["film-search__info"]}>
            <li>
              <RatingIcon rating={+parseRating(film.tmdbRating)} />
            </li>
            <li>{film.releaseYear}</li>
            <li>{parseGenres(film.genres) || "TV-Movie"}</li>
            <li>{parseRuntime(film.runtime)}</li>
          </ul>
          <h3 className={styles["film-search__title"]}>{film.title}</h3>
        </div>
      </div>
    </Link>
  );
};
