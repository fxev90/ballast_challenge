import { BorrowedBook } from "@/features/librarian";
import { axios } from "@/lib/axios";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { useQuery } from "@tanstack/react-query";

export const borrowedBooks = (
  email: string
): Promise<{ data: BorrowedBook[] }> => {
  return axios.get("/borrowedBooks", { params: { borrower_email: email } });
};

type DueBookViewsOptions = {
  email: string;
  config?: QueryConfig<typeof borrowedBooks>;
};

export const useBorrowedBooks = ({ email, config }: DueBookViewsOptions) => {
  return useQuery<ExtractFnReturnType<typeof borrowedBooks>>({
    queryKey: ["borrowed_books"],
    queryFn: () => borrowedBooks(email),
    ...config,
  });
};
