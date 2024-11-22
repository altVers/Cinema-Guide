import { FC } from "react";
import { TFilm } from "../../types/TFilm";
import styles from "./_FilmInfoView.module.scss";
import { FilmInfoEl } from "./FilmInfoEl/FilmInfoEl";
import { Container } from "../Container/Container";

type Props = {
  data: TFilm;
};

export const FilmInfoView: FC<Props> = ({ data }) => {
  return (
    <div className={styles["about-film"]}>
      <Container>
        <h3 className={styles["about-film__title"]}>О фильме</h3>
        <ul className={styles["about-film__list"]}>
          <li>
            <FilmInfoEl
              field="Оригинальное название"
              text={data.originalTitle}
            />
          </li>
          <li>
            <FilmInfoEl field="Язык оригинала" text={data.language} />
          </li>
          {data.budget ? (
            <li>
              <FilmInfoEl field="Бюджет" text={`${data.budget} $`} />
            </li>
          ) : null}
          {data.production ? (
            <li>
              <FilmInfoEl field="Продакшен" text={data.production} />
            </li>
          ) : null}
          {data.awardsSummary ? (
            <li>
              <FilmInfoEl field="Награды" text={data.awardsSummary} />
            </li>
          ) : null}
          {data.director ? (
            <li>
              <FilmInfoEl field="Продюсер" text={data.director} />
            </li>
          ) : null}
        </ul>
      </Container>
    </div>
  );
};
