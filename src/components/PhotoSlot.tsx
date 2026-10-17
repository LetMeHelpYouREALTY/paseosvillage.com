export function PhotoSlot({ label }: { label: string }) {
  return (
    <div className="photo-slot" role="img" aria-label={label} data-todo="TODO-PHOTO">
      {/* TODO-PHOTO: {label} */}
      <span>{label}</span>
    </div>
  );
}
