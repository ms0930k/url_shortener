"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav
      className="
      w-full
      border-b
      px-8
      py-4
      flex
      justify-between
      items-center
      "
      style={{
        backgroundColor: "var(--surface-color)",
        borderColor: "var(--border-color)",
      }}
    >
      <Link
        href="/"
        className="
        text-2xl
        font-bold
        "
      >
        Shortify
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/">Home</Link>

        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/auth">
          Login
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
}