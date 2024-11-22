import { useQuery } from "@tanstack/react-query"
import { TGenres } from "../types/TGenre"
import { fetchGenres } from "../api/fetchGenres"
import { queryClient } from "../main"

export const useGenresQuery = () => {
    const {data, isLoading , error} = useQuery<TGenres>({
        queryFn: () => fetchGenres(),
        queryKey: ['genres'],
        refetchOnWindowFocus: false,
    }, queryClient)

    return {data, isLoading, error}
}