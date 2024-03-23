import { cookies } from "next/headers";
import { UserData } from "@/app/auth/types";

export default function useServerSession(): UserData | undefined {
  const state = cookies().get("auth_state")?.value;
  return state ? (JSON.parse(atob(state)) as UserData) : undefined;
}
