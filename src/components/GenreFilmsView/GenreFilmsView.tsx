import { FC, useState } from "react";
import { TFilmsArray } from "../../types/TFilm";
import { Link } from "react-router-dom";
import { Icon } from "../Icon/Icon";
import { Container } from "../Container/Container";
import { FilmCard } from "../FilmCard/FilmCard";
import { Button } from "../Button/Button";
import styles from "./_GenreFilmsView.module.scss";
import { fetchMoviesByGenre } from "../../api/fetchMoviesByGenre";

type Props = {
  genre: string;
  data: TFilmsArray;
};

export const GenreFilmsView: FC<Props> = ({ genre, data }) => {
  /*
  Здесь создаем три хука по управлению загрукзи контента:
  1. films - хранит в себе массив фильмов, которые мы получили от сервера
  2. page - в котором лежит страница, которую запрашиваем с сервера
  3. isMoreFilms - хранит в себе информацию о том, что есть еще фильмы для загрузки
  */
  const [films, setFilms] = useState(data || []);
  const [isMoreFilms, setIsMoreFilms] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  /*
  Функция, которая загружает еще фильмы, если есть еще фильмы для загрузки. 
  Если фильмов больше нет, то скрывает кнопку загрузки.
  */
  const handleLoadMore = () => {
    setPage(page + 1);
    fetchMoviesByGenre(genre.toLowerCase(), page + 1).then((data) => {
      if (data) setFilms([...films, ...data]);
    });
    setIsMoreFilms(isLoadMore());
  };

  /* Функция, которая проверяет, есть ли еще фильмы для загрузки. */
  const isLoadMore = () => {
    let isLoadMore = true;
    fetchMoviesByGenre(genre.toLowerCase(), page + 1).then((data) => {
      if (data?.length === 0) isLoadMore = false;
    });
    return isLoadMore;
  };

  return (
    <>
      <div className={styles["genre-films"]}>
        <Container>
          <h2 className={styles["genre-films__title"]}>
            <Link className={styles["genre-films__link"]} to={"/Cinema-Guide/movie/genres/"}>
              <Icon id="back-arrow" width="40" height="40" />
              {genre}
            </Link>
          </h2>
          <ul className={styles["genre-films__list"]}>
            {films?.map((film) => {
              return (
                <li key={film.id}>
                  <FilmCard
                    film={film}
                    anyStyles={styles["genre-films__card"]}
                  />
                </li>
              );
            })}
          </ul>
          {isMoreFilms && isLoadMore() && (
            <Button
              type="button"
              onClick={handleLoadMore}
              anyStyle={styles["genre-films__btn"]}
            >
              <span>Показать еще</span>
            </Button>
          )}
        </Container>
      </div>
    </>
  );
};
