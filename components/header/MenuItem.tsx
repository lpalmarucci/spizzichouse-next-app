"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export interface MenuItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function MenuItem(props: MenuItemProps) {
  const router = useRouter();

  return (
    <Button
      asChild
      variant="ghost"
      className="justify-start gap-2 outline-0"
      size="lg"
      onClick={() => router.push(props.href)}
    >
      <div className="w-full flex gap-2 items-center cursor-pointer select-none">
        {props.icon}
        <span>{props.label}</span>
      </div>
    </Button>
  );
}

export default MenuItem;
