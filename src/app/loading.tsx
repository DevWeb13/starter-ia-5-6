export default function Loading() {
  return (
    <div className="page-shell py-14 sm:py-20" role="status" aria-live="polite">
      <p className="mb-6 font-semibold">Chargement de la page…</p>
      <div aria-hidden="true" className="space-y-4">
        <div className="h-5 w-36 animate-pulse rounded bg-muted motion-reduce:animate-none" />
        <div className="h-14 max-w-2xl animate-pulse rounded-xl bg-muted motion-reduce:animate-none" />
        <div className="h-28 max-w-3xl animate-pulse rounded-xl bg-muted motion-reduce:animate-none" />
      </div>
    </div>
  );
}
