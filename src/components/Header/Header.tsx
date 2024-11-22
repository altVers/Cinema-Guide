import { FC, useState } from "react";
import { SearchInput } from "../SearchInput/SearchInput";
import { Button } from "../Button/Button";
import styles from "./_Header.module.scss";
import { Logo } from "../Logo/Logo";
import { Container } from "../Container/Container";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import { handleScrollTop } from "../../utils/handleScrollTop";
import { AuthForm } from "../AuthForm/AuthForm";
import { useFetchMeQuery } from "../../hooks/fetchMeQuery";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { showAuthForm } from "../../states/slices/authFormSlice";
import { Icon } from "../Icon/Icon";

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<boolean>(false);
  const isUserAuthorized = useAppSelector((state) => state.profile.authorized);
  const isAuthOpen = useAppSelector((state) => state.authForm.isShown);
  const { data } = useFetchMeQuery();

  const toggleSearchShown = () => {
    setSearch(!search);
  };

  return (
    <header
      className={
        isAuthOpen
          ? classNames(styles.header, styles["header--auth-open"])
          : styles.header
      }
    >
      <Container>
        <div className={styles.header__wrapper}>
          <a className={styles.header__logo} href={"/"}>
            <Logo className={styles.header__logo_svg} />
          </a>
          <nav className={styles.header__nav}>
            <ul className={styles.header__nav_list}>
              <li className={styles["header__nav_genres-icon"]}>
                <Link
                  onClick={handleScrollTop}
                  className={styles.header__nav_link}
                  to={"/movie/genres/"}
                >
                  <Icon id="genres" width="24" height="24" />
                </Link>
              </li>
              <li className={styles.header__nav_main}>
                <NavLink
                  onClick={handleScrollTop}
                  className={({ isActive }) =>
                    isActive
                      ? classNames(styles.header__nav_link, styles.active)
                      : styles.header__nav_link
                  }
                  to={"/"}
                >
                  Главная
                </NavLink>
              </li>
              <li className={styles.header__nav_genres}>
                <NavLink
                  onClick={handleScrollTop}
                  className={({ isActive }) =>
                    isActive
                      ? classNames(styles.header__nav_link, styles.active)
                      : styles.header__nav_link
                  }
                  to={"/movie/genres/"}
                >
                  Жанры
                </NavLink>
              </li>
              <li>
                <Button type="button" style="noBg" onClick={toggleSearchShown} anyStyle={styles.header__nav_search_icon}>
                  <Icon id="search" width="24" height="24" />
                </Button>
                <SearchInput
                  className={styles.header__nav_input}
                  toggleSearchShown={toggleSearchShown}
                  searchShown={search}
                />
              </li>
            </ul>
          </nav>
          {isUserAuthorized && data ? (
            <>
              <Link to={"/profile"} className={styles["header__profile-icon"]}>
                <Icon id="user" width="24" height="24" />
              </Link>
              <NavLink
                to={"/profile"}
                className={({ isActive }) =>
                  isActive
                    ? classNames(
                        styles.header__nav_link,
                        styles.active,
                        styles.header__nav_profile
                      )
                    : classNames(
                        styles.header__nav_link,
                        styles.header__nav_profile
                      )
                }
              >
                {data.name}
              </NavLink>
            </>
          ) : (
            <>
              <Button
                anyStyle={styles["header__profile-icon"]}
                style="noBg"
                onClick={() => dispatch(showAuthForm())}
              >
                <Icon id="user" width="24" height="24" />
              </Button>
              <Button
                anyStyle={styles["header__profile-button"]}
                style="noBg"
                onClick={() => dispatch(showAuthForm())}
              >
                <span>Войти</span>
              </Button>
            </>
          )}
        </div>
      </Container>
      <AuthForm />
    </header>
  );
};