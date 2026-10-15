import type { ReactNode } from "react";
import Sidebar from "@/app/_components/Sidebar";
import type { SidebarSection } from "@/app/_components/Sidebar";

export default function AppShell({
  active,
  children,
}: {
  active: SidebarSection;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F6ECDF]">
      <Sidebar active={active} />
      <main className="flex-1 min-w-0 h-screen overflow-y-auto">{children}</main>
    </div>
  );
}
