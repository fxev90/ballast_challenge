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

const FormSchema = z
  .object({
    names: z.string().min(2, "Required"),
    last_names: z.string().min(2, "Required"),
    password: z.string().min(6, "password should be at leas 6 characters long"),
    password_confirmation: z.string().min(6, {
      message: "password should be at leas 6 characters long",
    }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Submitted passwords don't match",
    path: ["confirm"],
  });

export type DTO = z.infer<typeof FormSchema>;

export const RegistrationForm: React.FC<{
  submitCallback: (data: DTO) => void;
}> = function ({ submitCallback }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      names: "",
      last_names: "",
      password: "",
      password_confirmation: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitCallback)} className="space-y-8">
        <FormField
          control={form.control}
          name="names"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="input name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="last_names"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lastname</FormLabel>
              <FormControl>
                <Input placeholder="input last name" {...field} />
              </FormControl>
              <FormDescription>Input your last name.</FormDescription>
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
        <FormField
          control={form.control}
          name="password_confirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="confirm password"
                  {...field}
                />
              </FormControl>
              <FormDescription>Please confirm your password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
