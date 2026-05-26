import IncidentsTable from "@/components/dashboard/IncidentsTable";

export default function DashboardPage() {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-tight text-(--foreground)">
          Incidents
        </h1>
        <button className="rounded-md bg-(--accent) px-4 py-2 text-sm font-medium text-(--accent-foreground) transition-colors hover:bg-(--accent-hover)">
          Log incident
        </button>
      </div>

      <IncidentsTable />
    </>
  );
}
