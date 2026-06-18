export default function Hero() {
  return (
    <section
      className="
      text-center
      py-20
      "
    >
      <h1
        className="
        text-6xl
        font-bold
        mb-4
        "
      >
        Shorten URLs.
      </h1>

      <h1
        className="
        text-6xl
        font-bold
        "
        style={{
          color: "var(--primary-color)",
        }}
      >
        Track Everything.
      </h1>

      <p
        className="
        mt-6
        text-lg
        opacity-80
        "
      >
        Create short links and monitor
        their performance in real-time.
      </p>
    </section>
  );
}