import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const user = await currentUser();
  return (
    <div className="text-foreground">
      <h1 className="w-full text-3xl font-bold">Welcome, {user?.username}</h1>
      <span className="w-full text-md font-semibold ">Qui potrai trovare i dati aggiornati alle ultime partite</span>
    </div>
  );
}
