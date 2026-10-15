import Link from "next/link";
import type { Child } from "@/app/_data/children";

function parentsLabel(count: number): string {
  if (count === 0) return "sin padres vinculados";
  return count === 1 ? "1 padre vinculado" : `${count} padres vinculados`;
}

function ChevronIcon() {
  return (
    <svg
      className="flex-none"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#CBB89F"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default function ChildCard({ child }: { child: Child }) {
  const badge = child.allergyLabel
    ? { label: child.allergyLabel, className: "bg-[#FBD8CC] text-[#D9684A]" }
    : child.parents.length === 0
      ? { label: "VINCULAR", className: "bg-[#F9D2DE] text-[#C56486]" }
      : null;

  return (
    <Link
      href={`/kids/${child.id}`}
      className="flex items-center gap-[14px] min-w-0 bg-[#FFFDF9] border border-[#ECE0D0] rounded-[18px] p-4 shadow-[0_4px_14px_-12px_rgba(120,90,60,0.5)] transition hover:border-[#F2A78E] hover:-translate-y-0.5"
    >
      <div
        className="w-12 h-12 rounded-full font-display font-semibold text-[19px] flex items-center justify-center flex-none"
        style={{ backgroundColor: child.avatarBg, color: child.avatarText }}
      >
        {child.initial}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-display font-semibold text-base text-[#3F362E]">
          {child.name}
        </div>
        <div className="text-[13px] text-[#A89A8B]">
          {child.age} · {parentsLabel(child.parents.length)}
        </div>
      </div>
      {badge ? (
        <span
          className={`flex-none text-[11px] font-extrabold py-[5px] px-[9px] rounded-full ${badge.className}`}
        >
          {badge.label}
        </span>
      ) : (
        <ChevronIcon />
      )}
    </Link>
  );
}
