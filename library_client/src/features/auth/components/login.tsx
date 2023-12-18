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
  email: z.string().email(),
  password: z.string().min(6, "password should be at least 6 characters long"),
});

export type DTO = z.infer<typeof FormSchema>;

export const LoginForm: React.FC<{
  submitCallback: (data: DTO) => void;
}> = function ({ submitCallback }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitCallback)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="input email" {...field} />
              </FormControl>
              <FormDescription>Input account's email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="input password"
                  {...field}
                />
              </FormControl>
              <FormDescription>Your account password.</FormDescription>
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
