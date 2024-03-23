"use server";

import { signInSchema } from "@/components/form/SignIn/SignIn.schema";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { LoginResponse, ResponseError } from "@/app/auth/types";
import { signUpSchema } from "@/components/form/SignUp/SignUp.schema";
import { User } from "@/app/players/types";
import { revalidatePath } from "next/cache";

export async function signInAction(prevState: any, formData: FormData) {
  try {
    const parse = signInSchema.safeParse({
      username: formData.get("username"),
      password: formData.get("password"),
    });

    if (!parse.success) return { message: "Error validating the form" };

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/login`, {
      body: JSON.stringify(parse.data),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const user = (await response.json()) as LoginResponse | ResponseError;
    if (response.status !== 200 && isResponseError(user)) {
      return { message: user.message };
    }
    const { access_token, ...userState } = user as LoginResponse;
    cookies().set("auth", access_token, { secure: true, httpOnly: true, maxAge: userState.expiresIn });
    cookies().set("auth_state", btoa(JSON.stringify(userState)), {
      secure: true,
      maxAge: userState.expiresIn,
    });
  } catch (e: any) {
    if (e.cause.code === "ECONNREFUSED") return { message: "Server non raggiungibile" };
    return { message: "Autenticazione fallita" };
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function signOutAction() {
  cookies().delete("auth");
  cookies().delete("auth_state");
  return redirect("/auth");
}

export async function registerUser(prevState: any, formData: FormData): Promise<{ status: string; message?: string }> {
  try {
    const parse = signUpSchema.safeParse({
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      username: formData.get("username"),
      password: formData.get("password"),
    });

    if (!parse.success) return { status: "ko", message: "Error while validating the form" };

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/users`, {
      body: JSON.stringify(parse.data),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const user = (await response.json()) as User | ResponseError;
    if (response.status !== 200 && isResponseError(user)) {
      return { status: "ko", message: user.message };
    }
    return { status: "ok" };
  } catch (e: any) {
    if (e.cause.code === "ECONNREFUSED") return { status: "ko", message: "Server non raggiungibile" };
    return { status: "ko", message: "Errore durante la registrazione dell'utente" };
  }
}

const isResponseError = (data: any): data is ResponseError => {
  return data.hasOwnProperty("message");
};
