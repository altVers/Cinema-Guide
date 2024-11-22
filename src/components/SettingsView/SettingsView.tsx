import { fetchLogout } from "../../api/fetchLogout";
import { useFetchMeQuery } from "../../hooks/fetchMeQuery";
import { parseNameSurename } from "../../utils/parseNameSurename";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { Loader } from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
import styles from "./_SettingsView.module.scss";
import { queryClient } from "../../main";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { authUser } from "../../states/slices/profileSlice";

export const SettingsView = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data, isLoading, error, refetch } = useFetchMeQuery();

  const handleLogout = () => {
    fetchLogout().then((response) => {
      if(response.result !== true) {
        throw new Error(response.message)
      } else {
        queryClient.invalidateQueries({queryKey: ["profile"]});
        refetch()
        dispatch(authUser(false))
        navigate("/");
      }
      return response.json();
    }).catch(error => {
      console.error('Проблема с отправкой запроса:', error);
    });
     
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Произошла ошибка: {error.message}</div>;
  }

  if (!data) {
    return <div>Нет данных о пользователе.</div>;
  }

  return (
    <div className={styles.settings}>
      <ul className={styles.settings__list}>
        <li>
          <div className={styles["user-data"]}>
            <div className={styles["user-data__icon"]}>
              {parseNameSurename(data.name, data.surname)}
            </div>
            <div className={styles["user-data__content"]}>
              <span className={styles["user-data__label"]}>Имя Фамилия</span>
              <span
                className={styles["user-data__text"]}
              >{`${data.name} ${data.surname}`}</span>
            </div>
          </div>
        </li>
        <li>
          <div className={styles["user-data"]}>
            <div className={styles["user-data__icon"]}>
              <Icon id="input-email" width="24" height="24" />
            </div>
            <div className={styles["user-data__content"]}>
              <span className={styles["user-data__label"]}>
                Электронная почта
              </span>
              <span className={styles["user-data__text"]}>{data.email}</span>
            </div>
          </div>
        </li>
      </ul>
      <Button onClick={handleLogout} type="button">
        <span>Выйти из аккаунта</span>
      </Button>
    </div>
  );
};
