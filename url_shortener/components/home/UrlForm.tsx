"use client";

import { useState } from "react";

export default function UrlForm() {
  const [url, setUrl] = useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    console.log(url);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
      flex
      gap-4
      max-w-4xl
      mx-auto
      "
    >
      <input
        type="url"
        placeholder="Paste your URL here..."
        value={url}
        onChange={(e) =>
          setUrl(e.target.value)
        }
        className="
        flex-1
        p-4
        rounded-lg
        border
        "
      />

      <button
        type="submit"
        className="
        px-8
        rounded-lg
        font-semibold
        cursor-pointer
        "
        style={{
          backgroundColor:
            "var(--primary-color)",
          color: "white",
        }}
      >
        Shorten
      </button>
    </form>
  );
}