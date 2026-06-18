export default function ShortenedCard() {
  return (
    <div
      className="
      mt-10
      p-6
      rounded-xl
      border
      max-w-4xl
      mx-auto
      "
      style={{
        backgroundColor:
          "var(--surface-color)",
        borderColor:
          "var(--border-color)",
      }}
    >
      <h3 className="font-semibold mb-2">
        Your Short URL
      </h3>

      <div
        className="
        flex
        justify-between
        items-center
        "
      >
        <span>
          shortify.vercel.app/abc123
        </span>

        <button
          className="
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
    </div>
  );
}