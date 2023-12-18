import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { Book } from "../types";
import { ResponseBody } from "@/types";

export interface BookViewParams
  extends Partial<Omit<Book, "id" | "author_name" | "author_last_name">> {
  search?: string;
}

export const bookViews = ({
  search,
  isbn,
  title,
  genre_name,
}: BookViewParams): Promise<ResponseBody<Book>> => {
  return axios.get(`/bookViews`, {
    params: {
      search,
      isbn,
      title,
      genre_name,
    },
  });
};

type QueryFnType = typeof bookViews;

type UseBookViewsOptions = {
  params: BookViewParams;
  config?: QueryConfig<QueryFnType>;
};

export const useBookViews = ({ params, config }: UseBookViewsOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["books"],
    queryFn: () => bookViews(params),
    ...config,
  });
};