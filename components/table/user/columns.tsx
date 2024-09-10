"use client";

import { ColumnDef } from "@tanstack/react-table";
import User from "@/lib/models/user.model";

export const userTableColumns: ColumnDef<User>[] = [
  {
    accessorKey: "firstname",
    header: "Firstname",
  },
  {
    accessorKey: "lastname",
    header: "Lastname",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
];
