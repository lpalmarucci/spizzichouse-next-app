import { z } from "zod";

export const signUpSchema = z.object({
  firstname: z
    .string()
    .min(2, {
      message: "Firstname must be at least 2 characters.",
    })
    .max(20),
  lastname: z
    .string()
    .min(2, {
      message: "Lastname must be at least 2 characters.",
    })
    .max(25),
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(50),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .max(20),
});
