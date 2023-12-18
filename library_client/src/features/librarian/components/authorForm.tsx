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

const FormSchema = z.object({
  author_names: z.string(),
  author_last_names: z.string(),
});

export type DTO = z.infer<typeof FormSchema>;

export const AuthorForm: React.FC<{
  submitCallback: (data: DTO) => void;
}> = function ({ submitCallback }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      author_names: "",
      author_last_names: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitCallback)} className="space-y-8">
        <FormField
          control={form.control}
          name="author_names"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author Name</FormLabel>
              <FormControl>
                <Input placeholder="input name" {...field} />
              </FormControl>
              <FormDescription>Input Author's Name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author_last_names"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author LastName</FormLabel>
              <FormControl>
                <Input placeholder="input lastname" {...field} />
              </FormControl>
              <FormDescription>Input Author's Lastname</FormDescription>
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
