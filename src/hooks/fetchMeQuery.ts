import { useQuery } from "@tanstack/react-query";
import { TProfile } from "../types/TProfile";
import { fetchMe } from "../api/fetchMe";
import { queryClient } from "../main";

export const useFetchMeQuery = () => {
  const { data, isLoading, error, refetch } = useQuery<TProfile>({
    queryFn: () => fetchMe(),
    queryKey: ["profile"],
    retry: 1,
  }, queryClient);

  return { data, isLoading, error, refetch };
};
