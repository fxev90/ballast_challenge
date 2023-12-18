import { useMutation, useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { ResponseBody } from "@/types";
import { Genre } from "../types";

export const genres = (): Promise<ResponseBody<Genre>> => {
  return axios.get("/genres");
};

export const genre = ({
  genreId,
}: {
  genreId: string;
}): Promise<{ data: Genre }> => {
  return axios.get(`/genres/${genreId}`);
};

type QueryFnType = typeof genres;
type QueryGenreFnType = typeof genre;

type UseGenresOptions = {
  config?: QueryConfig<QueryFnType>;
};

type UseGenreOptions = {
  genreId: string;
  config?: QueryConfig<QueryGenreFnType>;
};

export const useGenres = ({ config }: UseGenresOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["genres"],
    queryFn: () => genres(),
    ...config,
  });
};

export const useGenre = ({ genreId, config }: UseGenreOptions) => {
  return useQuery<ExtractFnReturnType<QueryGenreFnType>>({
    queryKey: ["genre", genreId],
    queryFn: () => genre({ genreId }),
    ...config,
  });
};

export const createGenre = (
  data: Omit<Genre, "id">
): Promise<{ data: Genre }> => {
  return axios.post("/genres", data);
};

export const useCreateGenre = () => {
  return useMutation({
    onSuccess: (data) => {
      console.log(`Literary genre created ${data}`);
    },
    mutationFn: createGenre,
  });
};
