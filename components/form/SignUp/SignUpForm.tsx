"use client";

import * as React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signUpSchema } from "@/components/form/SignUp/SignUp.schema";
import { registerUser } from "@/app/auth/actions";
import { useFormState } from "react-dom";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import SubmitButton from "@/components/form/SubmitButton";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  onRegisterSuccess: () => void;
}

export function SignUpForm({ className, ...props }: UserAuthFormProps) {
  const router = useRouter();
  const form = useForm<z.infer<typeof signUpSchema>>({
    mode: "onChange",
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
    },
  });

  const [state, formAction] = useFormState(registerUser, null);

  useEffect(() => {
    if (state) {
      if (state.status === "ko") {
        toast({
          title: state.message,
          variant: "destructive",
          duration: 1800,
        });
      } else {
        props.onRegisterSuccess();
      }
    }
  }, [state]);
  return (
    <Form {...form}>
      <form action={formAction} className="space-y-4">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Firstname</FormLabel>
              <FormControl>
                <Input placeholder="Firstname" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lastname</FormLabel>
              <FormControl>
                <Input placeholder="Lastname" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
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
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton text="Sign up" isDisabled={!form.formState.isValid} />
      </form>
    </Form>
  );
}
