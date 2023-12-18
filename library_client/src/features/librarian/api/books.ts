import { axios } from "@/lib/axios";
import { Book } from "../types";
import {
  ExtractFnReturnType,
  MutationConfig,
  QueryConfig,
} from "@/lib/react-query";
import { useMutation, useQuery } from "@tanstack/react-query";

export interface BookResponse
  extends Omit<Book, "genre_name" | "author_name" | "author_last_name"> {
  copies: number;
  genre: string;
  author: string;
}

export const book = ({
  bookId,
}: {
  bookId: string;
}): Promise<{ data: BookResponse }> => {
  return axios.get(`/books/${bookId}`);
};

type QueryFnType = typeof book;

type UseBooksOptions = {
  bookId: string;
  config?: QueryConfig<QueryFnType>;
};

export const useBook = ({ bookId, config }: UseBooksOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["book", bookId],
    queryFn: () => book({ bookId }),
    ...config,
  });
};

type CreateBookDTO = {
  title: string;
  isbn: string;
  author: number;
  genre: number;
  copies: number;
};

export const createBook = (data: CreateBookDTO): Promise<{ data: Book }> => {
  return axios.post("/books", data);
};

interface EditBookDTO extends CreateBookDTO {
  id: number;
}

export const updateBook = (data: EditBookDTO): Promise<{ data: Book }> => {
  return axios.post(`/books/${data.id}`, data);
};

export const useCreateBook = () => {
  return useMutation({
    onSuccess: () => {
      alert(`book successfully created!`);
    },
    mutationFn: createBook,
  });
};

type MutationFnType = typeof updateBook;

type UseUpdateBookOption = {
  config?: MutationConfig<MutationFnType>;
};

export const useUpdateBook = ({ config }: UseUpdateBookOption) => {
  return useMutation({
    onSuccess: () => {
      alert(`book succesfully updated!`);
    },
    mutationFn: updateBook,
    ...config,
  });
};
