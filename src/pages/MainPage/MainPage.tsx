import { Container } from "../../components/Container/Container";
import { FilmView } from "../../components/FilmView/FilmView";
import { Loader } from "../../components/Loader/Loader";
import { TopFilmView } from "../../components/TopFilmsView/TopFilmsView";
import { useRandomFilmQuery } from "../../hooks/useRandomFilmQuery";

export const MainPage = () => {
  const { data, error, isLoading, refetch } = useRandomFilmQuery();

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

  /*
    Здесь решил объединить вывод данных на главной странице, 
    несмотря на то, что у топа фильмов свой личный запрос:
    По мне так, если не загружается главный элемент страницы — случайный фильм, 
    то остальное нет смысла показывать. Хотя тут на усмотрения продукта, можно и пересобрать, и,
    допустим, выводить какую нибудь заглушку по случайному фильму и загруженный топ-10 
  */

  return (
    <>
      <FilmView data={data} refetch={refetch} type="main"/>
      <TopFilmView />
    </>
  );
};
