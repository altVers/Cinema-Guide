import { FC, useState } from "react";
import { Container } from "../../components/Container/Container";
import { Button } from "../../components/Button/Button";
import { Icon } from "../../components/Icon/Icon";
import { FavoritesView } from "../../components/FavoritesView/FavoritesView";
import { SettingsView } from "../../components/SettingsView/SettingsView";
import cn from "classnames";
import styles from "./_ProfilePage.module.scss";

type Pages = "favorites" | "settings";

export const ProfilePage: FC = () => {
  const [tab, setTab] = useState<Pages>("favorites");

  return (
    <div className={styles.profile}>
      <Container>
        <h3 className={styles.profile__title}>Мой аккаунт</h3>
        <div className={styles.profile__tabs}>
          <Button
            type="button"
            style="noBg"
            onClick={() => setTab("favorites")}
            anyStyle={
              tab === "favorites"
                ? cn(styles["profile__tab-active"], styles.profile__tab)
                : styles.profile__tab
            }
          >
            <Icon id="like" width="24" height="24" />
            <span>Избранное</span>
          </Button>
          <Button
            type="button"
            style="noBg"
            onClick={() => setTab("settings")}
            anyStyle={
              tab === "settings"
                ? cn(styles["profile__tab-active"], styles.profile__tab)
                : styles.profile__tab
            }
          >
            <Icon id="user" width="24" height="24" />
            <span>Настройки</span>
          </Button>
        </div>
        {tab === "favorites" ? <FavoritesView /> : <SettingsView />}
      </Container>
    </div>
  );
};
