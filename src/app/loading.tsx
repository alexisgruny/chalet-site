export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EBE2D6]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 rounded-full border-4 border-[#3a4b3c]/20 border-t-[#3a4b3c] animate-spin" />
        <p className="text-sm font-medium text-[#3a4b3c]/60">Chargement…</p>
      </div>
    </div>
  );
}
