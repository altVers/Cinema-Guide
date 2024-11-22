import { FC } from "react";
import { Container } from "../../components/Container/Container";
import { Loader } from "../../components/Loader/Loader";
import { useGenresQuery } from "../../hooks/useGenresQuery";
import { GenresView } from "../../components/GenresView/GenresView";

export const GenresPage: FC = () => {
  const { data, error, isLoading } = useGenresQuery();

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

  const parsedData: string[] = []
  data.forEach(genre => {
    parsedData.push(`${genre[0].toUpperCase()}${genre.slice(1, genre.length)}`)
  });

  return (
    <>
        <GenresView parsedData={parsedData}/>
    </>
  );
};
