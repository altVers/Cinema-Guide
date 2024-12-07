import { FC, useEffect, useRef, useState } from "react";
import styles from "./_SearchInput.module.scss";
import { Icon } from "../Icon/Icon";
import { TFilmsArray } from "../../types/TFilm";
import { fetchMovieByTitle } from "../../api/fetchMovieByTitle";
import { FilmCardSearch } from "../FilmCardSearch/FilmCardSearch";
import cn from "classnames";
import { Button } from "../Button/Button";

type Props = {
  className?: string;
};

export const SearchInput: FC<Props> = ({ className }) => {
  const [data, setData] = useState<TFilmsArray>([]);
  const [isShow, setIsShow] = useState<boolean>();
  const [searchValue, setSearchValue] = useState<string>("");
  const searchInput = useRef<HTMLInputElement>(null);

  const fetchDatafromSearch = async (searchValue: string = "") => {
    await fetchMovieByTitle(searchValue).then((res) => setData(res));
  };

  useEffect(() => {
    if (isShow) {
      fetchDatafromSearch(searchValue);
    }
  }, [isShow, searchValue]);
  
  /*
  Функция для скрытия списка результатов поиска при клике на кнопку "X"
  */

  const handleClose = (
    event: React.MouseEvent<HTMLButtonElement> | undefined
  ) => {
    setIsShow(false);
    event?.stopPropagation();
  };

  return (
    <>
      <Button
        type="button"
        style="noBg"
        onClick={() => setIsShow(true)}
        anyStyle={styles["search__mobile-icon"]}
      >
        <Icon id="search" width="24" height="24" />
      </Button>

      <div
        className={
          isShow ? cn(styles.search, styles["search--active"]) : styles.search
        }
      >
        <label>
          <div className={styles.search__icon}>
            <Icon id="search" width="24" height="24" />
          </div>

          <input
            ref={searchInput}
            autoComplete="off"
            value={searchValue}
            onFocus={() => setIsShow(true)}
            onChange={(e) => setSearchValue(e.target.value)}
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
              isShow && searchInput.current?.value
                ? cn(styles["search__answer--active"], styles.search__answer)
                : styles.search__answer
            }
          >
            {data !== null && data.length > 0 && (
              <ul>
                {data?.map((item) => (
                  <li onClick={() => setIsShow(false)} key={item.id}>
                    <FilmCardSearch film={item} />
                  </li>
                ))}
              </ul>
            )}
            {data?.length === 0 && <p>Ничего не найдено...</p>}
          </div>
        </label>
      </div>
    </>
  );
};
