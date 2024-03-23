"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { signOutAction } from "@/app/auth/actions";
import { Icons } from "@/components/ui/icons";

function LogoutButton() {
  return (
    <Button className="w-full" variant="outline" onClick={() => signOutAction()}>
      <Icons.exit className="mr-2" />
      Log out
    </Button>
  );
}

export default LogoutButton;
