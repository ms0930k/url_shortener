"use client";

import { useState } from "react";

export default function UrlForm() {
const [url, setUrl] = useState("");
const [shortUrl, setShortUrl] = useState("");
const [loading, setLoading] = useState(false);

const handleSubmit = async (
e: React.FormEvent<HTMLFormElement>
) => {
e.preventDefault();

if (!url.trim()) {
  alert("Please enter a URL");
  return;
}

try {
  setLoading(true);

  const response = await fetch(
    "/api/shorten",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    alert(
      data.error ||
        "Failed to shorten URL"
    );
    return;
  }

  setShortUrl(data.shortUrl);
} catch (error) {
  console.error(error);
  alert("Something went wrong");
} finally {
  setLoading(false);
}


};

const copyToClipboard = async () => {
try {
await navigator.clipboard.writeText(
shortUrl
);


  alert("Copied!");
} catch (error) {
  console.error(error);
}


};

return ( <div className="max-w-4xl mx-auto"> <form
     onSubmit={handleSubmit}
     className="flex gap-4"
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
      disabled={loading}
      className="
        px-8
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
        ? "Creating..."
        : "Shorten"}
    </button>
  </form>

  {shortUrl && (
    <div
      className="
        mt-6
        p-4
        rounded-lg
        border
        flex
        justify-between
        items-center
      "
      style={{
        borderColor:
          "var(--border-color)",
        backgroundColor:
          "var(--surface-color)",
      }}
    >
      <span className="break-all">
        {shortUrl}
      </span>

      <button
        type="button"
        onClick={copyToClipboard}
        className="
          ml-4
          px-4
          py-2
          rounded-lg
        "
        style={{
          backgroundColor:
            "var(--primary-color)",
          color: "white",
        }}
      >
        Copy
      </button>
    </div>
  )}
</div>


);
}
