import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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
  copies: z.number(),
});

export type DTO = z.infer<typeof FormSchema>;

export const RegistrationForm: React.FC<{
  submitCallback: (data: DTO) => void;
  authors: Author[];
  genre: Genre[];
}> = function ({ submitCallback }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      isbn: "",
      author: "",
      genre: "",
      copies: 0,
    },
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
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isbn"
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
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Author</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={"0"}>m@example.com</SelectItem>
                  <SelectItem value={"1"}>m@google.com</SelectItem>
                  <SelectItem value={"2"}>m@support.com</SelectItem>
                </SelectContent>
              </Select>
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
