import { useQuery } from "@tanstack/react-query";
import { TFilmsArray } from "../types/TFilm";
import { fetchFavorites } from "../api/fetchFavorites";
import { queryClient } from "../main";

export const useFavoritesQuery = () => {
  const { data, isLoading, error, refetch } = useQuery<TFilmsArray | void>({
    queryFn: () => fetchFavorites(),
    queryKey: ["favorites"],
  }, queryClient);

  return { data, isLoading, error, refetch };
};
