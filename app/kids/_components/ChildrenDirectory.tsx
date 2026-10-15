"use client";

import { useMemo, useState } from "react";
import ChildCard from "@/app/_components/ChildCard";
import type { Child } from "@/app/_data/children";
import { room } from "@/app/_data/feed";

function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#B0A290"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default function ChildrenDirectory({ items }: { items: Child[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const search = normalize(query.trim());
    if (!search) return items;
    return items.filter((child) => normalize(child.name).includes(search));
  }, [items, query]);

  return (
    <div>
      <div className="flex items-center gap-[11px] bg-[#FFFDF9] border border-[#ECE0D0] rounded-[14px] py-3 px-4 mb-[22px]">
        <SearchIcon />
        <input
          type="text"
          placeholder="Buscar niño…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="flex-1 border-none bg-transparent text-[15px] text-[#3F362E] placeholder:text-[#B6A99B] focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-3 mb-[14px]">
        <span className="text-[12.5px] font-extrabold tracking-[0.8px] text-[#3F362E]">
          {room.name.toUpperCase()}
        </span>
        <span className="text-[13px] text-[#A89A8B]">
          {filtered.length} niño{filtered.length === 1 ? "" : "s"}
        </span>
        <span className="flex-1 h-px bg-[#E7DAC8]" />
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 gap-[14px]">
          {filtered.map((child) => (
            <ChildCard key={child.id} child={child} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center text-[15px] text-[#A89A8B]">
          No se encontraron niños
        </div>
      )}
    </div>
  );
}
