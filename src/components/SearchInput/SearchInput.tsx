import { FC, useState } from "react";
import styles from "./_SearchInput.module.scss";
import { Icon } from "../Icon/Icon";
import { TFilmsArray } from "../../types/TFilm";
import { fetchMovieByTitle } from "../../api/fetchMovieByTitle";
import { FilmCardSearch } from "../FilmCardSearch/FilmCardSearch";
import cn from "classnames";
import { useSearchParams } from "react-router-dom";
import { Button } from "../Button/Button";

type Props = {
  className?: string;
  toggleSearchShown: () => void;
  searchShown: boolean;
};

export const SearchInput: FC<Props> = ({
  className,
  toggleSearchShown,
  searchShown,
}) => {
  // Здесь храним данные поиска
  const [data, setData] = useState<TFilmsArray>([]);
  // Здесь храним состояние показа/скрытия списка результатов поиска
  const [isShow, setIsShow] = useState(searchShown);
  // Здесь храним квери парамерты из url
  const [searchParams, setSearchParams] = useSearchParams();
  // Элемент input для работы с ним
  const inputEl: HTMLInputElement = document.getElementsByTagName("input")[0];

  if (searchShown) {
    inputEl.focus();
  }

  /*
  Функция для поиска фильмов по названию. Срабатывает при изменении значения input 
  и записывает фильмы в state и добавляет квери параметр в url
  */
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    fetchMovieByTitle(e.target.value).then((res) => setData(res));
    setSearchParams({ search: e.target.value });
  };

  /*
  Функция для показа результатов поиска при фокусе на input
  */

  const handleOnFocus = () => {
    fetchMovieByTitle(searchParams.get("search") || "").then((res) => {
      setData(res);
      setIsShow(true);
    });
  };

  /*
  Функция для скрытия списка результатов поиска при клике на кнопку "X"
  */

  const handleClose = (
    event: React.MouseEvent<HTMLButtonElement> | undefined
  ) => {
    setIsShow(false);
    if (searchShown) {
      toggleSearchShown();
    }
    event?.stopPropagation();
  };

  return (
    <div
      className={
        searchShown
          ? cn(styles.search, styles["search--active"])
          : styles.search
      }
    >
      <label>
        <div className={styles.search__icon}>
          <Icon id="search" width="24" height="24" />
        </div>

        <input
          autoComplete="off"
          value={searchParams.get("search") || ""}
          onFocus={handleOnFocus}
          onChange={handleSearch}
          placeholder="Поиск"
          id="search-input"
          className={
            className
              ? `${className} ${styles.search__input}`
              : styles.search__input
          }
        />

        <Button
          onClick={(e) => handleClose(e)}
          style="noBg"
          anyStyle={
            isShow
              ? cn(
                  styles["search__answer--active"],
                  styles["search__button-close"]
                )
              : styles["search__button-close"]
          }
        >
          <Icon id="exit" width="24" height="24" />
        </Button>
        <div
          className={
            isShow && inputEl.value
              ? cn(styles["search__answer--active"], styles.search__answer)
              : styles.search__answer
          }
        >
          {data !== null && data.length > 0 && (
            <ul>
              {data?.map((item) => (
                <li key={item.id}>
                  <FilmCardSearch film={item} />
                </li>
              ))}
            </ul>
          )}
          {data?.length === 0 && <p>Ничего не найдено...</p>}
        </div>
      </label>
    </div>
  );
};
