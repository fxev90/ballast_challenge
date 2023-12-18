import { Layout } from "../components/layout";
import { BookForm, DTO } from "../components/bookForm";
import { useCreateBook } from "../api/books";
import { useAuthors } from "../api/authors";
import { useGenres } from "../api/genres";

export const CreateBook = () => {
  const { mutate } = useCreateBook();
  const { data: authorData } = useAuthors({});
  const { data: genreData } = useGenres({});

  const handleSubmit = async (data: DTO) => {
    const serialized = {
      ...data,
      author: parseInt(data.author),
      genre: parseInt(data.genre),
      copies: parseInt(data.copies)
    };
    mutate(serialized);
  };

  return (
    <Layout title="Create a New Book">
      <BookForm
        genres={genreData?.data ?? []}
        authors={authorData?.data ?? []}
        submitCallback={handleSubmit}
      />
    </Layout>
  );
};
