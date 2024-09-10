import React from "react";
import { getUsers } from "@/lib/actions/user.actions";
import { DataTable } from "@/components/ui/data-table";
import { userTableColumns } from "@/components/table/user/columns";

export default async function PlayersPage() {
  const users = await getUsers();

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col flex-grow items-center gap-6 md:gap-12">
        <h1 className="text-md lg:text-5xl text-foreground font-semibold">Giocatori</h1>
        <DataTable data={users} columns={userTableColumns} />
      </div>
    </div>
  );
}
