import { FC } from "react";
import { Icon } from "../Icon/Icon";
import { Socials } from "../Socials/Socials";
import styles from "./_Footer.module.scss";
import { Container } from "../Container/Container";

export const Footer: FC = () => {
  return (
    <footer>
      <Container>
        <div className={styles.footer__wrapper}>
          <span className={styles.footer__copyright}>
            <span className={styles.footer__LLC}>LLC «Мультимедиа Визион»</span>
            <span className={styles["footer__copyright-text"]}>
              <Icon id="copyright" width="24" height="24" /> Все права защищены
            </span>
          </span>
          <Socials />
        </div>
      </Container>
    </footer>
  );
};
