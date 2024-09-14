import { userTableColumns } from "@/components/table/user/columns";
import { DataTable } from "@/components/ui/data-table";
import React from "react";
import { getUsers } from "@/lib/actions/user.actions";
import { type User } from "@/lib/models/user.model";

export async function UsersDataTable() {
  const users: User[] = await getUsers();

  return (
    <DataTable
      data={users}
      columns={userTableColumns}
      filterOptions={{ key: "username", label: "Search for username..." }}
    />
  );
}
