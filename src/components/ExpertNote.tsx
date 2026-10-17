export function ExpertNote({ page }: { page: string }) {
  return (
    <aside className="border border-gold bg-card p-6" data-expert-note="TODO-EXPERT">
      <p className="eyebrow">Local expert note</p>
      <p className="mt-3">
        TODO-EXPERT: Dr. Jan Duffy will write a firsthand detail for {page} before launch. This
        block stays blank until she writes it.
      </p>
    </aside>
  );
}
