import { Layout } from "../components/layout";
import { BookForm, DTO } from "../components/bookForm";
import { BookResponse, useBook, useUpdateBook } from "../api/books";
import { useAuthors } from "../api/authors";
import { useGenres } from "../api/genres";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const EditBook = () => {
  const { bookId } = useParams();
  const { data } = useBook({ bookId: bookId ?? "" });
  const { mutate } = useUpdateBook({});
  const { data: authorData } = useAuthors({});
  const { data: genreData } = useGenres({});
  const [initValues, setInitValues] = useState<BookResponse>();
  const handleSubmit = async (data: DTO) => {
    const serialized = {
      ...data,
      author: parseInt(data.author),
      genre: parseInt(data.genre),
      copies: parseInt(data.copies),
      id: parseInt(bookId as string),
    };
    mutate(serialized);
  };

  useEffect(() => {
    setInitValues(data?.data);
  }, [data?.data]);

  return (
    <Layout title="Edit a Book">
      <BookForm
        initValues={
          initValues && {
            ...initValues,
            copies: initValues?.copies.toString() ?? "",
          }
        }
        genres={genreData?.data ?? []}
        authors={authorData?.data ?? []}
        submitCallback={handleSubmit}
      />
    </Layout>
  );
};
