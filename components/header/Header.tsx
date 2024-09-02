"use client";

import React from "react";
import Link from "next/link";
import AppMenu from "@/components/header/AppMenu";
import UserMenu from "@/components/buttons/UserMenu";

function Header() {
  return (
    <header className="w-full max-w-5xl mx-auto flex justify-between py-4 px-2 lg:px-0">
      <AppMenu />
      <div className="text-2xl font-extrabold">
        <Link
          className="cursor-pointer select-none text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500"
          href="/dashboard"
        >
          Spizzichouse
        </Link>
      </div>
      <div>
        <UserMenu />
      </div>
    </header>
  );
}

export default Header;
