import { useQuery } from "@tanstack/react-query";
import { fetchRandomFilm } from "../api/fetchRandomFilm";
import { TFilm } from "../types/TFilm";
import { queryClient } from "../main";

export const useRandomFilmQuery = () => {
  const { data, error, isLoading, refetch } = useQuery<TFilm>({
    queryFn: () => fetchRandomFilm(),
    queryKey: ["random-film"],
    refetchOnWindowFocus: false,
  }, queryClient);
  return { data, error, isLoading, refetch };
};
