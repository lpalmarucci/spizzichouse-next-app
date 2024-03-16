"use server";

import { signInSchema } from "@/components/form/SignIn/SignIn.schema";

export async function signIn(formData: FormData) {
  const parse = signInSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!parse.success) return { status: "ko", message: "Error validating the form" };

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/login`, {
    body: JSON.stringify(parse.data),
    method: "POST",
  });
  return response.json();
}
