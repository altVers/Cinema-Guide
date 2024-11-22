import { FC } from "react";
import { GenresList } from "../GenresList/GenresList";
import styles from "./_GenresView.module.scss";
import { Container } from "../Container/Container";

type Props = {
  parsedData: string[];
};

export const GenresView: FC<Props> = ({ parsedData }) => {
  return (
    <div className={styles.genres}>
      <Container>
        <h2 className={styles.genres__title}>Жанры фильмов</h2>
        <GenresList genres={parsedData} />
      </Container>
    </div>
  );
};
