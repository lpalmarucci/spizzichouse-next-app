import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { createUser, getUser } from "@/lib/actions/user.actions";

export default async function Page() {
  const user = await currentUser();

  if (!user) return redirect("/sign-in");

  const storedUser = await getUser(user.id);
  if (storedUser) redirect("/dashboard");

  if (!user.username) {
    alert("username is empty");
  }

  await createUser({
    id: user.id,
    image: user.imageUrl,
    firstname: user.firstName ?? "",
    lastname: user.lastName ?? "",
    username: user.username ?? "",
  });

  redirect("/dashboard");
}
