import Link from "next/link";

const links = [
  {
    id: 1,
    shortUrl: "short.ly/abc123",
    originalUrl: "https://google.com",
    clicks: 32,
  },
  {
    id: 2,
    shortUrl: "short.ly/xyz999",
    originalUrl: "https://github.com",
    clicks: 15,
  },
];

export default function LinksTable() {
  return (
    <div
      className="
      rounded-xl
      border
      overflow-hidden
      "
      style={{
        borderColor: "var(--border-color)",
      }}
    >
      <table className="w-full">
        <thead
          style={{
            backgroundColor:
              "var(--surface-color)",
          }}
        >
          <tr>
            <th className="p-4 text-left">
              Short URL
            </th>

            <th className="p-4 text-left">
              Original URL
            </th>

            <th className="p-4 text-left">
              Clicks
            </th>

            <th className="p-4 text-left">
              Analytics
            </th>
          </tr>
        </thead>

        <tbody>
          {links.map((link) => (
            <tr
              key={link.id}
              className="border-t"
            >
              <td className="p-4">
                {link.shortUrl}
              </td>

              <td className="p-4">
                {link.originalUrl}
              </td>

              <td className="p-4">
                {link.clicks}
              </td>

              <td className="p-4">
                <Link
                  href={`/dashboard/${link.id}`}
                  className="text-blue-500"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}