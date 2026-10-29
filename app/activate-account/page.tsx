import Link from "next/link";
import SunIcon from "@/app/_components/SunIcon";
import { invitation } from "@/app/_data/auth";

export default function ActivateAccountPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FBF4EC] p-10">
      <div className="w-full max-w-[440px]">
        <div className="w-[58px] h-[58px] rounded-[18px] bg-[linear-gradient(155deg,#F8C3A8,#F2937A)] flex items-center justify-center mb-[22px] shadow-[0_12px_26px_-10px_rgba(238,129,100,0.65)]">
          <SunIcon size={30} />
        </div>

        <h1 className="font-display font-semibold text-[32px] leading-[1.15] m-0 mb-2 text-[#3F362E]">
          Bienvenida a OpenDayCare
        </h1>
        <p className="m-0 mb-[26px] text-[#94887B] text-[15.5px] leading-[1.55]">
          Te invitaron a seguir el día de tu hijo. Creá tu contraseña para
          activar la cuenta.
        </p>

        <div className="flex items-center gap-[14px] bg-white border-[1.5px] border-[#EADFD0] rounded-[16px] p-[14px_16px] mb-[22px]">
          <div
            className="w-11 h-11 rounded-full font-display font-semibold text-[19px] flex items-center justify-center flex-none"
            style={{ backgroundColor: invitation.avatarBg, color: invitation.avatarText }}
          >
            {invitation.childInitial}
          </div>
          <div>
            <div className="text-[13px] text-[#94887B]">
              Te invitaron a seguir a
            </div>
            <div className="font-display font-semibold text-[17px] text-[#3F362E]">
              {invitation.childName} · {invitation.room}
            </div>
          </div>
        </div>

        <div className="text-[12px] font-bold tracking-[0.7px] text-[#94887B] mb-[8px]">
          CÓDIGO DE INVITACIÓN
        </div>
        <input
          id="code"
          name="code"
          placeholder={invitation.code}
          className="w-full p-[14px_16px] rounded-[14px] border-[1.5px] border-[#EADFD0] bg-white text-[18px] tracking-[3px] font-bold text-[#3F362E] mb-[18px] placeholder:text-[#B6A99B] focus:outline-none font-display"
        />

        <div className="text-[12px] font-bold tracking-[0.7px] text-[#94887B] mb-[8px]">
          EMAIL
        </div>
        <input
          id="email"
          name="email"
          type="email"
          placeholder={invitation.email}
          className="w-full p-[14px_16px] rounded-[14px] border-[1.5px] border-[#EADFD0] bg-white text-[15px] text-[#3F362E] mb-[18px] placeholder:text-[#B6A99B] focus:outline-none"
        />

        <div className="text-[12px] font-bold tracking-[0.7px] text-[#94887B] mb-[8px]">
          CREAR CONTRASEÑA
        </div>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          className="w-full p-[14px_16px] rounded-[14px] border-[1.5px] border-[#F2A78E] bg-white text-[15px] text-[#3F362E] mb-[18px] placeholder:text-[#B6A99B] focus:outline-none"
        />

        <label className="flex items-start gap-3 bg-[#FBF1D6] rounded-[14px] p-[14px_16px] mb-6 cursor-pointer">
          <input type="checkbox" name="photoConsent" className="peer sr-only" />
          <span className="flex-none w-6 h-6 rounded-[8px] bg-white border-2 border-[#D8C48A] flex items-center justify-center mt-[1px] transition-colors peer-checked:bg-[#5FB97E] peer-checked:border-[#5FB97E] [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <span className="text-[14px] text-[#8A7234] leading-[1.45]">
            Autorizo a la guardería a tomar y compartir fotos de mi hijo dentro
            de la app.
          </span>
        </label>

        <a
          href="#"
          className="block text-center w-full p-[15px] rounded-[15px] bg-[linear-gradient(180deg,#F4977E,#EE8164)] text-white font-extrabold text-[16px] shadow-[0_10px_22px_-8px_rgba(238,129,100,0.7)]"
        >
          Activar mi cuenta
        </a>

        <p className="text-center mt-[22px] m-0 text-[#94887B] text-[14.5px]">
          ¿Ya tenés cuenta?{" "}
          <Link href="/login" className="text-[#C5503A] font-extrabold">
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
