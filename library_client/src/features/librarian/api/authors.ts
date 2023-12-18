import { useMutation, useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { ResponseBody } from "@/types";
import { Author } from "../types";

export const authors = (): Promise<ResponseBody<Author>> => {
  return axios.get("/authors");
};

export const author = ({
  authorId,
}: {
  authorId: string;
}): Promise<{ data: Author }> => {
  return axios.get(`/authors/${authorId}`);
};

type QueryFnType = typeof authors;
type QueryAuthorFnType = typeof author;

type UseAuthorsOptions = {
  config?: QueryConfig<QueryFnType>;
};

type UseAuthorOptions = {
  authorId: string;
  config?: QueryConfig<QueryAuthorFnType>;
};

export const useAuthors = ({ config }: UseAuthorsOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["authors"],
    queryFn: () => authors(),
    ...config,
  });
};

export const useAuthor = ({ authorId, config }: UseAuthorOptions) => {
  return useQuery<ExtractFnReturnType<QueryAuthorFnType>>({
    queryKey: ["author", authorId],
    queryFn: () => author({ authorId }),
    ...config,
  });
};

export const createAuthor = (
  data: Omit<Author, "id">
): Promise<{ data: Author }> => {
  return axios.post("/authors", data);
};

export const useCreateAuthor = () => {
  return useMutation({
    onSuccess: (data) => {
      console.log(`author created ${data}`);
    },
    mutationFn: createAuthor,
  });
};
