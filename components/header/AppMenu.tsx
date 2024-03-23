import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "@/components/ui/icons";
import MenuItem from "@/components/header/MenuItem";

const menuItems = [
  {
    id: 1,
    label: "Dashboard",
    icon: <Icons.dashboard />,
    href: "/dashboard",
  },
  {
    id: 2,
    label: "Giocatori",
    icon: <Icons.person />,
    href: "/players",
  },
  {
    id: 3,
    label: "Casate",
    icon: <Icons.home />,
    href: "/locations",
  },
  {
    id: 4,
    label: "Partite",
    icon: <Icons.frame />,
    href: "/matches",
  },
];

function AppMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Icons.hamburger />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" hideCloseIcon>
        <div className="mx-auto w-full max-w-sm flex flex-col gap-2">
          {menuItems.map(({ id, ...item }) => (
            <SheetClose key={id}>
              <MenuItem {...item} key={id} />
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default AppMenu;
