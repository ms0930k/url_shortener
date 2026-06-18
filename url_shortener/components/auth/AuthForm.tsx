"use client";

import { useState } from "react";

export default function AuthForm() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div
      className="
      w-full
      max-w-md
      p-8
      rounded-xl
      border
      "
      style={{
        backgroundColor: "var(--surface-color)",
        borderColor: "var(--border-color)",
      }}
    >
      {/* Toggle */}

      <div
  className="
  flex
  p-1
  rounded-lg
  mb-6
  "
  style={{
    backgroundColor: "var(--bg-color)",
  }}
>
  <button
    onClick={() => setIsSignup(false)}
    className={`
      flex-1
      py-2
      rounded-md
      transition
      ${
        !isSignup
          ? "bg-blue-500 text-white"
          : ""
      }
    `}
  >
    Sign In
  </button>

  <button
    onClick={() => setIsSignup(true)}
    className={`
      flex-1
      py-2
      rounded-md
      transition
      ${
        isSignup
          ? "bg-blue-500 text-white"
          : ""
      }
    `}
  >
    Sign Up
  </button>
</div>

      <form className="space-y-4">
        {isSignup && (
          <input
            type="text"
            placeholder="Username"
            className="
            w-full
            p-3
            rounded-lg
            border
            "
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="
          w-full
          p-3
          rounded-lg
          border
          "
        />

        <input
          type="password"
          placeholder="Password"
          className="
          w-full
          p-3
          rounded-lg
          border
          "
        />

        {isSignup && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="
            w-full
            p-3
            rounded-lg
            border
            "
          />
        )}

        <button
          type="submit"
          className="
          w-full
          p-3
          rounded-lg
          font-semibold
          cursor-pointer
          "
          style={{
            backgroundColor: "var(--primary-color)",
            color: "white",
          }}
        >
          {isSignup
            ? "Create Account"
            : "Sign In"}
        </button>
      </form>
    </div>
  );
}