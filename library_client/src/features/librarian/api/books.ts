import { axios } from "@/lib/axios";
import { Book } from "../types";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { useMutation, useQuery } from "@tanstack/react-query";

export const book = ({
  bookId,
}: {
  bookId: string;
}): Promise<{ data: Book }> => {
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

export const updateBook = ({
  bookId,
  data,
}: {
  bookId: string;
  data: Omit<Book, "id">;
}): Promise<{ data: Book }> => {
  return axios.post(`/books/${bookId}`, data);
};

export const useCreateBook = () => {
  return useMutation({
    onSuccess: () => {
      alert(`book successfully created!`);
    },
    mutationFn: createBook,
  });
};

/*export const useUpdateBook = (bookId: string) => {
  return useMutation({
    onSuccess: (data) => {
      console.log(`book created ${data}`);
    },
    mutationFn: updateBook,
  });
};*/
