import React from "react";
import { UsersDataTable } from "@/app/(root)/players/_components/UsersDataTable";
import Spinner from "@/components/ui/Spinner";

export default async function PlayersPage() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col flex-grow items-center gap-6 md:gap-12">
        <h1 className="text-md lg:text-5xl text-foreground font-semibold">Giocatori</h1>
        <React.Suspense fallback={<Spinner />}>
          <UsersDataTable />
        </React.Suspense>
      </div>
    </div>
  );
}
