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

export interface BorrowedBook {
  id: number;
  due_date: string;
  returned_date?: string | null;
  borrowed_date: string;
  borrower_email: string;
  book_id: number;
  book_title: string;
  book_isbn: string;
  librarian?: string | null;
}

export const borrowedBooks = (
  due_date: string
): Promise<{ data: BorrowedBook[] }> => {
  return axios.get("/borrowedBooks", { params: { due_date } });
};

type DueBookViewsOptions = {
  due_date: string;
  config?: QueryConfig<typeof borrowedBooks>;
};

export const useDueBook = ({ due_date, config }: DueBookViewsOptions) => {
  return useQuery<ExtractFnReturnType<typeof borrowedBooks>>({
    queryKey: ["due_books"],
    queryFn: () => borrowedBooks(due_date),
    ...config,
  });
};

export const overdueBooks = (): Promise<BorrowedBook[]> => {
  return axios.get("borrowedBooks-overdue");
};

export const useOverdueBook = () => {
  return useQuery<ExtractFnReturnType<typeof overdueBooks>>({
    queryKey: ["due_books"],
    queryFn: () => overdueBooks(),
  });
};
