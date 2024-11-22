import { FC } from "react";
import { useMoviesByGenreQuery } from "../../hooks/useMovieByGenreQuery";
import { useParams } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { Loader } from "../../components/Loader/Loader";
import { GenreFilmsView } from "../../components/GenreFilmsView/GenreFilmsView";

export const GenreFilmsPage: FC = () => {
  const params = useParams();
  const current = params.movieGenre || "";
  const { data, error, isLoading } = useMoviesByGenreQuery(
    current.toLowerCase(),
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    console.error(error);
    return (
      <Container>
        <span>Произошла какая-то ошибка...</span>
      </Container>
    );
  }

  if (!data) {
    return (
      <Container>
        <span>Сервер не хочет делиться данными...</span>
      </Container>
    );
  }
  return (
    <GenreFilmsView
      genre={current}
      data={data}
    />
  );
};
