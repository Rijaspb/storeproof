const COLUMNS = [
  { key: "id",              label: "ID" },
  { key: "incidentTime",    label: "Incident Time" },
  { key: "reason",          label: "Reason" },
  { key: "status",          label: "Status" },
  { key: "evidenceStorage", label: "Evidence Storage" },
  { key: "notes",           label: "Notes" },
  { key: "policeLink",      label: "Police Link" },
  { key: "submissionTime",  label: "Submission Time" },
] as const;

export default function IncidentsTable() {
  return (
    <div className="overflow-hidden rounded-lg border border-(--border)">
      <table className="w-full text-sm">
        <thead className="bg-(--foreground)">
          <tr>
            {COLUMNS.map((col) => (
              <th
                key={col.key}
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium tracking-wide text-(--accent-foreground) whitespace-nowrap"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-(--surface)">
          <tr>
            <td
              colSpan={COLUMNS.length}
              className="py-20 text-center text-sm text-(--text-muted)"
            >
              No incidents logged yet.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
