import { FC } from "react";
import { useTopTenQuery } from "../../hooks/useTopTenQuery";
import { FilmCard } from "../FilmCard/FilmCard";
import { Container } from "../Container/Container";
import { Loader } from "../Loader/Loader";
import styles from './_TopFilmsView.module.scss'

export const TopFilmView: FC = () => {
  const { data, isLoading, error } = useTopTenQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    console.error(error);
    return (
      <Container>
        <span className="top-films__error">Произошла какая то ошибка...</span>
      </Container>
    );
  }

  if (!data) {
    return (
      <Container>
        <span className="top-films__error">
          Топ-10 фильмов на сегодня еще не сформирован :(
        </span>
      </Container>
    );
  }

  return (
    <div className={styles['top-films']}>
      <Container>
        <h2 className={styles['top-films__title']}>Топ 10 фильмов</h2>
        <ul className={styles['top-films__wrapper']}>
          {data?.map((film) => {
            return <li className={styles['top-films__el']} key={film.id}>
              <FilmCard film={film} />
            </li>;
          })}
        </ul>
      </Container>
    </div>
  );
};
