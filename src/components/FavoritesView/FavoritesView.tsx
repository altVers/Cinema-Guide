import { FC } from "react";
import { FilmCard } from "../FilmCard/FilmCard";
import styles from "./_FavoritesView.module.scss";
import { useFavoritesQuery } from "../../hooks/useFavoritesQuery";
import { Loader } from "../Loader/Loader";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { useDeleteMovieMutation } from "../../hooks/useDeleteMovieMutation";
import { queryClient } from "../../main";

export const FavoritesView: FC = () => {
  const { data, isLoading, error, refetch } = useFavoritesQuery();

  const mutation = useDeleteMovieMutation()
  const handleMovieDelete = (id: number) => {
    mutation.mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["favorites"] })
        refetch()
      }
    }) 
  }

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  if (data?.length === 0) {
    return <div>Ты еще не добавил фильмы в избранное.</div>;
  }

  return (
    <div className={styles.favorites}>
      <ul className={styles.favorites__list}>
        {data?.map((film) => (
          <li key={film.id}>
            <FilmCard film={film} />
            <Button anyStyle={styles["favorites__button-close"]} style="close" onClick={() => handleMovieDelete(film.id)}>
              <Icon id="close" width="24" height="24" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
