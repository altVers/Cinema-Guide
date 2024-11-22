import { useMutation } from "@tanstack/react-query";
import { fetchDeleteMovie } from "../api/fetchDeleteMovie";
import { queryClient } from "../main";

export const useDeleteMovieMutation = () => {
  const deleteMovieMutation = useMutation({
    mutationFn: (id: number) => fetchDeleteMovie(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favotires"] });
    },
  }, queryClient);
  return deleteMovieMutation;
};
