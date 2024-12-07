import { FC, useState } from "react";
import { Button } from "../../Button/Button";
import { Icon } from "../../Icon/Icon";
import styles from "./_FilmViewButtons.module.scss";
import { QueryObserverResult, useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchAddToFavorite } from "../../../api/fetchAddToFavorite";
import { useFetchMeQuery } from "../../../hooks/fetchMeQuery";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { showAuthForm } from "../../../states/slices/authFormSlice";
import cn from "classnames";
import { useDeleteMovieMutation } from "../../../hooks/useDeleteMovieMutation";
import { queryClient } from "../../../main";

type Props = {
  type: "main" | "about";
  handleModalChange?: () => void;
  refetchPage?: () => Promise<QueryObserverResult>;
  id: number;
};

export const FilmViewButtons: FC<Props> = ({
  type,
  handleModalChange,
  refetchPage,
  id,
}) => {
  const dispatch = useAppDispatch();

  const { data, refetch } = useFetchMeQuery();
  const [like, setLike] = useState(data?.favorites?.includes(id.toString()));

  const mutateFavorite = useMutation({
    mutationFn: (id: string) => fetchAddToFavorite(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
      setLike(true);
    },
  });

  const handleRefetch = () => {
    refetchPage?.();
    queryClient.invalidateQueries({ queryKey: ["profile"] });
    refetch?.();
    setLike(data?.favorites?.includes(id.toString()));
  };

  const mutation = useDeleteMovieMutation();
  const handleMovieDelete = (id: number) => {
    mutation.mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["favorites"] });
        setLike(false);
        refetch();
      },
    });
  };

  const handleAddToFavorite = () => {
    if (data && !like) {
      mutateFavorite.mutate(id.toString());
    } else if (data && like) {
      handleMovieDelete(id);
    } else {
      dispatch(showAuthForm());
    }
  };

  if (type === "main") {
    return (
      <>
        <Button
          anyStyle={styles["film__button-trailer"]}
          type="button"
          onClick={handleModalChange}
        >
          <span>Трейлер</span>
        </Button>
        <Link className={styles["film__button-info"]} to={`/movie/${id}`}>
          О фильме
        </Link>
        <Button
          style="icon"
          anyStyle={
            like
              ? cn(
                  styles["film__button-like"],
                  styles["film__button-like--active"]
                )
              : styles["film__button-like"]
          }
          onClick={handleAddToFavorite}
        >
          <Icon id="like" width="24" height="24" />
        </Button>
        <Button
          style="icon"
          onClick={handleRefetch}
          anyStyle={styles["film__button-refresh"]}
        >
          <Icon id="refresh" width="24" height="24" />
        </Button>
      </>
    );
  }
  if (type === "about") {
    return (
      <>
        <Button onClick={handleModalChange}>
          <span>Трейлер</span>
        </Button>
        <Button
          style="icon"
          anyStyle={
            like
              ? cn(
                  styles["film__button-like"],
                  styles["film__button-like--active"]
                )
              : styles["film__button-like"]
          }
          onClick={handleAddToFavorite}
        >
          <Icon id="like" width="24" height="24" />
        </Button>
      </>
    );
  }
};
