import { useQuery } from "@tanstack/react-query"
import { fetchTopTen } from "../api/fetchTopTen"
import { TFilmsArray } from "../types/TFilm"
import { queryClient } from "../main"

export const useTopTenQuery = () => {
    const {data, isLoading , error} = useQuery<TFilmsArray>({
        queryFn: () => fetchTopTen(),
        queryKey: ['top-ten'],
        refetchOnWindowFocus: false,
    }, queryClient)

    return {data, isLoading, error}
}