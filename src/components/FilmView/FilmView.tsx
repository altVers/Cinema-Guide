import { FC, useState } from "react";
import styles from "./_FilmView.module.scss";
import { Container } from "../Container/Container";
import { parseRuntime } from "../../utils/parseRuntime";
import { parseRating } from "../../utils/parseRating";
import { RatingIcon } from "../RatingIcon/RatingIcon";
import { FilmModalTrailer } from "../FilmModalTrailer/FilmModalTrailer";
import filmDefaultBg from "../../assets/images/film-default-bg.png";
import { parseGenres } from "../../utils/parseGenres";
import { TFilm } from "../../types/TFilm";
import { QueryObserverResult } from "@tanstack/react-query";
import { FilmViewButtons } from "./FilmViewButtons/FilmViewButtons";

interface Props {
  data: TFilm;
  refetch?: () => Promise<QueryObserverResult>;
  type?: "main" | "about";
}

export const FilmView: FC<Props> = ({ data, refetch, type = "main" }) => {
  const [state, setState] = useState<boolean>(false);

  const handleModalChange = () => {
    
    setState(!state);
  };

  return (
    <div className={styles.film}>
      <div className={styles["film__image-wrapper"]}>
        <img
          className={styles.film__image}
          src={data.backdropUrl || filmDefaultBg}
          alt="film poster"
        />
      </div>
      <Container>
        <div className={styles.film__wrapper}>
          <ul className={styles.film__info}>
            <li>
              <RatingIcon rating={+parseRating(data.tmdbRating)} />
            </li>
            <li>{data.releaseYear}</li>
            <li className={styles["film__info--genres"]}>
              {parseGenres(data.genres) || "TV-Movie"}
            </li>
            <li>{parseRuntime(data.runtime)}</li>
          </ul>
          <div className={styles.film__content}>
            <h2 className={styles.film__title}>{data.title}</h2>
            <p className={styles.film__description}>{data.plot}</p>
          </div>
          <div className={styles.film__buttons}>
            <FilmViewButtons
              type={type}
              handleModalChange={handleModalChange}
              refetchPage={refetch}
              id={data.id}
            />
          </div>
        </div>
        <FilmModalTrailer
          id={data.trailerYouTubeId}
          handleModalClose={handleModalChange}
          state={state}
        />
      </Container>
    </div>
  );
};
