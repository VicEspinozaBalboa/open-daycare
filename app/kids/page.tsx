import AppShell from "@/app/_components/AppShell";
import ChildrenDirectory from "./_components/ChildrenDirectory";
import { children } from "@/app/_data/children";

function PlusIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export default function KidsPage() {
  return (
    <AppShell active="kids">
      <div className="max-w-[880px] w-full mx-auto pt-[34px] px-10 pb-20">
        <div className="flex items-end justify-between gap-4 mb-[22px]">
          <div>
            <div className="text-[12.5px] font-extrabold tracking-[0.8px] text-[#D9583C] mb-1">
              GESTIÓN
            </div>
            <h1 className="font-display font-semibold text-[30px] m-0 text-[#3F362E]">
              Niños
            </h1>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 py-[11px] px-[18px] rounded-[14px] bg-[linear-gradient(180deg,#F4977E,#EE8164)] text-white font-extrabold text-[14.5px] shadow-[0_8px_18px_-8px_rgba(238,129,100,0.7)]"
          >
            <PlusIcon />
            Agregar niño
          </a>
        </div>

        <ChildrenDirectory items={children} />
      </div>
    </AppShell>
  );
}
