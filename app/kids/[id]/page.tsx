import Link from "next/link";
import { notFound } from "next/navigation";
import AppShell from "@/app/_components/AppShell";
import { children } from "@/app/_data/children";
import type { ChildParent, ParentStatus } from "@/app/_data/children";

export const instant = false;

export function generateStaticParams() {
  return children.map((child) => ({ id: child.id }));
}

interface ParentStatusStyle {
  badge: string;
  note: string;
  className: string;
}

function parentStatusStyle(
  status: ParentStatus,
  relation: string,
): ParentStatusStyle {
  const feminine = relation !== "Papá";
  if (status === "active") {
    return {
      badge: feminine ? "ACTIVA" : "ACTIVO",
      note: feminine ? "activa" : "activo",
      className: "bg-[#CFEBD8] text-[#3E9B6C]",
    };
  }
  return {
    badge: "PENDIENTE",
    note: "invitación enviada",
    className: "bg-[#F7E7A6] text-[#9A7B1E]",
  };
}

function ChevronLeftIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
      <path d="M12 9v4M12 17h.01" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function ParentRow({ parent }: { parent: ChildParent }) {
  const style = parentStatusStyle(parent.status, parent.relation);
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-10 h-10 rounded-full text-white font-display font-semibold text-base flex items-center justify-center flex-none"
        style={{ backgroundColor: parent.color }}
      >
        {parent.initial}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-extrabold text-[14.5px] text-[#3F362E]">
          {parent.name}
        </div>
        <div className="text-[12.5px] text-[#A89A8B]">
          {parent.relation} · {style.note}
        </div>
      </div>
      <span
        className={`flex-none text-[10.5px] font-extrabold py-1 px-[9px] rounded-full ${style.className}`}
      >
        {style.badge}
      </span>
    </div>
  );
}

export default async function ChildProfilePage(props: PageProps<"/kids/[id]">) {
  const { id } = await props.params;
  const child = children.find((item) => item.id === id);

  if (!child) {
    notFound();
  }

  return (
    <AppShell active="kids">
      <div className="max-w-[820px] w-full mx-auto pt-[34px] px-10 pb-20">
        <Link
          href="/kids"
          className="flex items-center gap-[7px] text-[#94887B] font-bold text-sm mb-5"
        >
          <ChevronLeftIcon />
          Volver a Niños
        </Link>

        <div className="flex gap-[26px] items-start flex-wrap">
          <div className="flex-1 min-w-[300px] flex flex-col gap-[18px]">
            <div className="flex items-center gap-[18px]">
              <div
                className="w-[84px] h-[84px] rounded-full font-display font-semibold text-[34px] flex items-center justify-center flex-none"
                style={{
                  backgroundColor: child.avatarBg,
                  color: child.avatarText,
                }}
              >
                {child.initial}
              </div>
              <div className="flex-1">
                <h1 className="font-display font-semibold text-[28px] m-0 text-[#3F362E]">
                  {child.name}
                </h1>
                <p className="mt-[3px] m-0 text-[#94887B] text-[15px]">
                  {child.age} · Sala {child.room}
                </p>
              </div>
              <a
                href="#"
                className="border-[1.5px] border-[#ECE0D0] bg-[#FFFDF9] text-[#6E6359] font-bold text-sm py-[9px] px-4 rounded-xl"
              >
                Editar
              </a>
            </div>

            {child.allergies ? (
              <div className="flex gap-[14px] bg-[#FBDAD6] rounded-2xl p-[16px_18px]">
                <div className="w-10 h-10 rounded-[11px] bg-[#F4A8A0] flex items-center justify-center flex-none">
                  <WarningIcon />
                </div>
                <div>
                  <div className="font-extrabold text-[#C5413A] text-[15px] mb-0.5">
                    Alergias y notas
                  </div>
                  <div className="text-[#B25249] text-[14.5px] leading-[1.5]">
                    {child.allergies}
                  </div>
                </div>
              </div>
            ) : null}

            <div className="bg-[#FFFDF9] border border-[#ECE0D0] rounded-2xl overflow-hidden">
              <div className="flex justify-between p-[15px_18px] border-b border-[#F0E6D8]">
                <span className="text-[#94887B] text-[14.5px]">
                  Fecha de nacimiento
                </span>
                <span className="font-extrabold text-[#3F362E] text-[14.5px]">
                  {child.birthDate}
                </span>
              </div>
              <div className="flex justify-between p-[15px_18px] border-b border-[#F0E6D8]">
                <span className="text-[#94887B] text-[14.5px]">Sala</span>
                <span className="font-extrabold text-[#3F362E] text-[14.5px]">
                  {child.room}
                </span>
              </div>
              <div className="flex justify-between p-[15px_18px]">
                <span className="text-[#94887B] text-[14.5px]">Ingreso</span>
                <span className="font-extrabold text-[#3F362E] text-[14.5px]">
                  {child.joinedAt}
                </span>
              </div>
            </div>
          </div>

          <div className="w-[300px] flex-none flex flex-col gap-[14px]">
            <a
              href="#"
              className="flex items-center justify-center gap-[9px] w-full p-[13px] rounded-[14px] bg-[#3F362E] text-white font-extrabold text-[15px]"
            >
              <SunIcon />
              Resumen del día
            </a>

            <div className="bg-[#FFFDF9] border border-[#ECE0D0] rounded-2xl p-[16px_18px]">
              <div className="text-[12.5px] font-extrabold tracking-[0.8px] text-[#8A7C6D] mb-[14px]">
                PADRES VINCULADOS
              </div>
              <div className="flex flex-col gap-[14px]">
                {child.parents.map((parent) => (
                  <ParentRow key={parent.id} parent={parent} />
                ))}
                <a href="#" className="flex items-center gap-3 pt-2">
                  <span className="w-10 h-10 rounded-full border-[1.5px] border-dashed border-[#D8CBBA] flex items-center justify-center text-[#B0A290] flex-none">
                    <PlusIcon />
                  </span>
                  <span className="font-extrabold text-[14.5px] text-[#C5503A]">
                    Vincular otro padre
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
