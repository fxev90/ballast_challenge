import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Author, Genre } from "..";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
  title: z.string(),
  isbn: z.string(),
  author: z.string(),
  genre: z.string(),
  copies: z.string(),
});

export type DTO = z.infer<typeof FormSchema>;

export const BookForm: React.FC<{
  submitCallback: (data: DTO) => void;
  authors: Author[];
  genres: Genre[];
  defaultValues?: {
    title: string;
    isbn: string;
    author: string;
    genre: string;
    copies: string;
  };
}> = function ({
  submitCallback,
  authors,
  genres,
  defaultValues = {
    title: "",
    isbn: "",
    author: "",
    genre: "",
    copies: "",
  },
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitCallback)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="input title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isbn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ISBN</FormLabel>
              <FormControl>
                <Input placeholder="input ISBN" {...field} />
              </FormControl>
              <FormDescription>
                ISBN-13 ex.. 9781566199094
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Author</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an Author" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {authors.map((author) => {
                    return (
                      <SelectItem
                        key={`${author.names}-${author.last_names}`}
                        value={author.id.toString()}
                      >
                        {author.names} {author.last_names}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Genre</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {genres.map((genre) => {
                    return (
                      <SelectItem
                        key={`${genre.name}-${genre.id}`}
                        value={genre.id.toString()}
                      >
                        {genre.name}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="copies"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount of copies</FormLabel>
              <FormControl>
                <Input type="number" placeholder="input ISBN" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid place-items-center">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
};
