import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ToggleTheme from "@/components/ToggleTheme";
import useClientSession from "@/hooks/useClientSession";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitialLetters } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import React from "react";
import { signOutAction } from "@/app/auth/actions";

export default function UserMenu() {
  const user = useClientSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="justify-start hover:bg-transparent gap-4 hover:backgroud">
          <Avatar>
            <AvatarFallback>{getInitialLetters(user.firstname, user.lastname)}</AvatarFallback>
          </Avatar>
          {user?.firstname} {user?.lastname}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-52 ">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Settings</DropdownMenuLabel>
          <DropdownMenuItem>
            <ToggleTheme />
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem className="cursor-pointer hover:bg-transparent" onClick={() => signOutAction()}>
            <span className="flex gap-2 items-center text-destructive font-semibold">
              <Icons.exit className="mr-2" />
              Log out
            </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
