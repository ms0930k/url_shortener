"use client";

import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
      px-4
      py-2
      rounded-lg
      cursor-pointer
      font-medium
      border
      transition
      "
      style={{
        backgroundColor: "var(--surface-color)",
        borderColor: "var(--border-color)",
      }}
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}