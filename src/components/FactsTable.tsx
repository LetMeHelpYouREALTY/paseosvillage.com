import { publishedFacts } from "@/data/paseos";
import { formatAsOf } from "@/lib/dates";

export function FactsTable({ ids }: { ids: string[] }) {
  const rows = publishedFacts(ids);
  if (rows.length === 0) return null;
  return (
    <div className="overflow-x-auto">
      <table>
        <caption className="pb-3 text-left font-display text-2xl">Key facts</caption>
        <thead>
          <tr>
            <th scope="col">Fact</th>
            <th scope="col">Detail</th>
            <th scope="col">Source</th>
            <th scope="col">As of</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <th scope="row">{row.label}</th>
              <td>{row.value}</td>
              <td>
                {row.sourceUrl.startsWith("http") ? (
                  <a href={row.sourceUrl}>{row.source}</a>
                ) : (
                  <span>
                    {row.source} ({row.sourceUrl})
                  </span>
                )}
              </td>
              <td>{formatAsOf(row.asOf)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
