import useServerSession from "@/hooks/useServerSession";

export default async function DashboardPage() {
  const session = useServerSession();
  return (
    <div className="text-foreground">
      <h1 className="w-full text-3xl font-bold">Welcome, {session?.firstname}</h1>
      <span className="w-full text-md font-semibold ">Qui potrai trovare i dati aggiornati alle ultime partite</span>
    </div>
  );
}
