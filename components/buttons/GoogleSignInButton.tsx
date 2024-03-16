"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

function GoogleSignInButton() {
  async function handleGoogleLogin() {
    window.location.href = `${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/google`;
  }

  return (
    <Button variant="outline" type="button" onClick={handleGoogleLogin}>
      <Icons.google className="mr-2 h-4 w-4" />
      Sign In
    </Button>
  );
}

export default GoogleSignInButton;
