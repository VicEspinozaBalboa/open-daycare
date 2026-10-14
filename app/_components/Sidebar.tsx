import { currentUser, room } from "@/app/_data/feed";

function SunIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function FeedIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
    </svg>
  );
}

function ChildrenIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="7" r="3" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 20a5 5 0 0 1 5.5-4.9" />
    </svg>
  );
}

function NoticeIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
    </svg>
  );
}

const navItems = [
  { label: "Feed", active: true, icon: <FeedIcon /> },
  { label: "Niños", active: false, icon: <ChildrenIcon /> },
  { label: "Avisos", active: false, icon: <NoticeIcon /> },
  { label: "Mi cuenta", active: false, icon: <AccountIcon /> },
];

export default function Sidebar() {
  return (
    <aside className="w-[248px] flex-none bg-[#FFFDF9] border-r border-[#ECE0D0] flex flex-col py-6 px-4 sticky top-0 h-screen">
      <a
        href="#"
        className="flex items-center gap-[11px] pt-1 px-2 pb-[22px]"
      >
        <div className="w-[38px] h-[38px] rounded-xl bg-[linear-gradient(155deg,#F8C3A8,#F2937A)] flex items-center justify-center flex-none">
          <SunIcon />
        </div>
        <div>
          <div className="font-display font-semibold text-[17px] text-[#3F362E] leading-none">
            OpenDayCare
          </div>
          <div className="text-[11.5px] text-[#A89A8B] mt-0.5">
            {room.name}
          </div>
        </div>
      </a>

      <a
        href="#"
        className="flex items-center justify-center gap-2 w-full p-3 rounded-[14px] bg-[linear-gradient(180deg,#F4977E,#EE8164)] text-white font-extrabold text-[14.5px] shadow-[0_8px_18px_-8px_rgba(238,129,100,0.75)] mb-[18px]"
      >
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
        Nueva publicación
      </a>

      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={
              item.active
                ? "flex items-center gap-3 py-[11px] px-3 rounded-xl bg-[#FBE3D8] text-[#D9583C] font-extrabold text-[14.5px]"
                : "flex items-center gap-3 py-[11px] px-3 rounded-xl text-[#6E6359] font-semibold text-[14.5px]"
            }
          >
            {item.icon}
            {item.label}
          </a>
        ))}
      </nav>

      <div className="border-t border-[#ECE0D0] pt-[14px] mt-[10px]">
        <div className="flex items-center gap-[11px] py-1.5 px-2">
          <div className="w-[38px] h-[38px] rounded-full bg-[#F2937A] text-white font-display font-semibold text-base flex items-center justify-center flex-none">
            {currentUser.initial}
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-extrabold text-sm text-[#3F362E]">
              {currentUser.name}
            </div>
            <div className="text-xs text-[#A89A8B]">{currentUser.role}</div>
          </div>
          <a
            href="#"
            title="Cerrar sesión"
            className="flex-none w-8 h-8 rounded-[10px] bg-[#F6ECDF] text-[#94887B] flex items-center justify-center"
          >
            <LogoutIcon />
          </a>
        </div>
      </div>
    </aside>
  );
}
