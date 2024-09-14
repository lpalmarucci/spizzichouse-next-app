"use client";

import { Table as LayoutTable, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { DataTablePagination } from "@/components/table/DataTablePagination";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface DataTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  filterOptions: {
    key: keyof T;
    label: string;
  };
}

export function DataTable<T>({ columns, data, filterOptions }: DataTableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  return (
    <div className="w-full">
      {filterOptions && (
        <div
          className={cn("flex justify-end items-center mb-4 md:mb-8", {
            hidden: !filterOptions,
          })}
        >
          <Input
            type="text"
            placeholder={filterOptions?.label ?? "Type for filtering dataset.."}
            className="max-w-[256px]"
            value={(table.getColumn(filterOptions.key as string)?.getFilterValue() as string) ?? ""}
            onChange={(e) => table.getColumn(filterOptions?.key as string)?.setFilterValue(e.target.value) ?? ""}
          />
        </div>
      )}
      <div className="rounded-md border w-full">
        <LayoutTable>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </LayoutTable>
      </div>

      <div className="mt-4">
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}
