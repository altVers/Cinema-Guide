import { useQuery } from "@tanstack/react-query";
import { fetchMovieById } from "../api/fetchMovieById";
import { TFilm } from "../types/TFilm";
import { queryClient } from "../main";


export const useMovieByIdQuery = (id: number) => {
  const { data, error, isLoading } = useQuery<TFilm>({
    queryFn: () => fetchMovieById(id),
    queryKey: ["film-by-id"],
    refetchOnWindowFocus: false,
  }, queryClient);
  return { data, error, isLoading };
};
