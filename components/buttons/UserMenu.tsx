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
import { Icons } from "@/components/ui/icons";
import React from "react";
import { SignedIn, SignOutButton, useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitialLetters } from "@/lib/utils";

export default function UserMenu() {
  const { user, isSignedIn } = useUser();

  if (!isSignedIn) return;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="justify-start hover:bg-transparent gap-4 hover:backgroud">
          <Avatar>
            <AvatarFallback>{getInitialLetters(user?.firstName!, user?.lastName!)}</AvatarFallback>
          </Avatar>
          <span className="hidden md:block">
            {user?.firstName} {user?.lastName}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-52 ">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Settings</DropdownMenuLabel>
          <DropdownMenuItem className="pl-4">
            <ToggleTheme />
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem className="pl-4 cursor-pointer hover:bg-transparent">
            <SignedIn>
              <SignOutButton redirectUrl="/sign-in" signOutOptions={{ redirectUrl: "/sign-in" }}>
                <span className="flex gap-2 items-center text-red-500 font-semibold">
                  <Icons.exit className="mr-2" />
                  Log out
                </span>
              </SignOutButton>
            </SignedIn>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
