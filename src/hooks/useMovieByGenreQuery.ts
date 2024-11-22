import { useQuery } from "@tanstack/react-query";
import { fetchMoviesByGenre } from "../api/fetchMoviesByGenre";
import { TFilmsArray } from "../types/TFilm";
import { queryClient } from "../main";

export const useMoviesByGenreQuery = (genre: string, page: number = 1) => {
  const { data, error, isLoading } = useQuery<TFilmsArray>({
    queryFn: () => fetchMoviesByGenre(genre, page),
    queryKey: ["films-by-genre"],
    refetchOnWindowFocus: false,
  }, queryClient);
  return { data, error, isLoading };
};
