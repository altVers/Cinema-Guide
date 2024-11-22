import { useQuery } from "@tanstack/react-query";
import { TFilmsArray } from "../types/TFilm";
import { fetchMovieByTitle } from "../api/fetchMovieByTitle";
import { queryClient } from "../main";


export const useMovieByTitleQuery = (title: string) => {
  const { data, error, isLoading } = useQuery<TFilmsArray>({
    queryFn: () => fetchMovieByTitle(title),
    queryKey: ["film-by-title"],
    refetchOnWindowFocus: false,
  }, queryClient);
  return { data, error, isLoading };
};
