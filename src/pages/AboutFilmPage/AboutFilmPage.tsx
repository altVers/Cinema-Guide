import { FC } from "react";
import { FilmView } from "../../components/FilmView/FilmView";
import { useParams } from "react-router-dom";
import { useMovieByIdQuery } from "../../hooks/useMovieByIdQuery";
import { FilmInfoView } from "../../components/FilmInfoView/FilmInfoView";
import { Container } from "../../components/Container/Container";
import { Loader } from "../../components/Loader/Loader";

export const AboutFilmPage: FC = () => {
  const params = useParams();
  const current = params.movieId
  const { data, isLoading, error } = useMovieByIdQuery(Number(current));
  
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
        <span>Не можем найти данные об этом фильме...</span>
      </Container>
    );
  }

  return <>
    <FilmView data={data} type="about"/>
    <FilmInfoView data={data}/>
  </>;
};
