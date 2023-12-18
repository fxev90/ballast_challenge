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
  genre_name: z.string(),
});

export type DTO = z.infer<typeof FormSchema>;

export const AuthorForm: React.FC<{
  submitCallback: (data: DTO) => void;
}> = function ({ submitCallback }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      genre_name: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitCallback)} className="space-y-8">
        <FormField
          control={form.control}
          name="genre_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Genre Name</FormLabel>
              <FormControl>
                <Input placeholder="input name" {...field} />
              </FormControl>
              <FormDescription>Input Genre's Name</FormDescription>
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
