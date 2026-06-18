"use client";

import { useState } from "react";

export default function AuthForm() {
  const [isSignup, setIsSignup] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (isSignup) {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      try {
        setLoading(true);

        const response = await fetch(
          "/api/auth/signup",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              username,
              email,
              password,
            }),
          }
        );

        const data =
          await response.json();

        if (!response.ok) {
          alert(
            data.error ||
              "Signup failed"
          );
          return;
        }

        alert(
          "Account created successfully!"
        );

        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        setIsSignup(false);
      } catch (error) {
        console.error(error);

        alert("Something went wrong");
      } finally {
        setLoading(false);
      }
    }else {
  try {
    setLoading(true);

    const response = await fetch(
      "/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data =
      await response.json();

    if (!response.ok) {
      alert(
        data.error ||
          "Login failed"
      );
      return;
    }

    alert("Login successful!");

    setEmail("");
    setPassword("");

    // Later
    // router.push("/dashboard");

  } catch (error) {
    console.error(error);

    alert("Something went wrong");
  } finally {
    setLoading(false);
  }
}
  };

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
        backgroundColor:
          "var(--surface-color)",
        borderColor:
          "var(--border-color)",
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
          backgroundColor:
            "var(--bg-color)",
        }}
      >
        <button
          type="button"
          onClick={() =>
            setIsSignup(false)
          }
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
          type="button"
          onClick={() =>
            setIsSignup(true)
          }
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

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {isSignup && (
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(
                e.target.value
              )
            }
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
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
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
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
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
            value={
              confirmPassword
            }
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
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
          disabled={loading}
          className="
          w-full
          p-3
          rounded-lg
          font-semibold
          cursor-pointer
          disabled:opacity-50
          "
          style={{
            backgroundColor:
              "var(--primary-color)",
            color: "white",
          }}
        >
          {loading
            ? "Please wait..."
            : isSignup
            ? "Create Account"
            : "Sign In"}
        </button>
      </form>
    </div>
  );
}