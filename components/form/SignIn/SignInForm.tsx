"use client";

import * as React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useFormState } from "react-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInSchema } from "@/components/form/SignIn/SignIn.schema";
import SubmitButton from "@/components/form/SubmitButton";
import { toast } from "@/components/ui/use-toast";
import { signInAction } from "@/app/auth/actions";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function SignInForm({ className }: UserAuthFormProps) {
  const form = useForm<z.infer<typeof signInSchema>>({
    mode: "onSubmit",
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [state, formAction] = useFormState(signInAction, { message: "" });

  useEffect(() => {
    if (state.message !== "")
      toast({
        title: state.message,
        variant: "destructive",
        duration: 1800,
      });
  }, [state]);

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-4">
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
        <SubmitButton isDisabled={!form.formState.isValid} text="Sign in" />
      </form>
    </Form>
  );
}
