import Link from "next/link";
import SunIcon from "@/app/_components/SunIcon";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-[1.05fr_1fr] bg-[#FBF4EC]">
      <div className="relative overflow-hidden flex flex-col justify-between p-[56px_60px] text-white bg-[linear-gradient(155deg,#F6A98E_0%,#F2937A_45%,#EC7E62_100%)]">
        <div className="absolute w-[420px] h-[420px] rounded-full bg-white/12 -top-[140px] -right-[120px]" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-white/10 -bottom-[110px] -left-[80px]" />

        <div className="relative flex items-center gap-[13px]">
          <div className="w-[46px] h-[46px] rounded-[14px] bg-white/22 flex items-center justify-center">
            <SunIcon size={26} />
          </div>
          <span className="font-display font-semibold text-[21px] tracking-[0.5px]">
            OpenDayCare
          </span>
        </div>

        <div className="relative">
          <h1 className="font-display font-semibold text-[42px] leading-[1.12] m-0 mb-[18px]">
            El día de cada niño,
            <br />
            compartido con su familia.
          </h1>
          <p className="text-[17px] leading-[1.6] m-0 max-w-[430px] text-white/92">
            Publicá momentos, gestioná las salas y mantené a las familias cerca,
            desde un solo lugar.
          </p>
        </div>

        <div className="relative text-[14px] text-white/90">
          🌿 Guardería Sala Soles
        </div>
      </div>

      <div className="flex items-center justify-center p-10">
        <div className="w-full max-w-[392px]">
          <h2 className="font-display font-semibold text-[30px] m-0 mb-[6px] text-[#3F362E]">
            Iniciar sesión
          </h2>
          <p className="m-0 mb-[28px] text-[#94887B] text-[15px]">
            Ingresá para ver el día de hoy.
          </p>

          <div className="text-[12px] font-bold tracking-[0.7px] text-[#94887B] mb-[8px]">
            EMAIL
          </div>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            className="w-full p-[14px_16px] rounded-[14px] border-[1.5px] border-[#EADFD0] bg-white text-[15px] text-[#3F362E] mb-[18px] placeholder:text-[#B6A99B] focus:outline-none"
          />

          <div className="text-[12px] font-bold tracking-[0.7px] text-[#94887B] mb-[8px]">
            CONTRASEÑA
          </div>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            className="w-full p-[14px_16px] rounded-[14px] border-[1.5px] border-[#EADFD0] bg-white text-[15px] text-[#3F362E] mb-[10px] placeholder:text-[#B6A99B] focus:outline-none"
          />

          <div className="text-right mb-[20px]">
            <button
              type="button"
              className="text-[#C5503A] text-[13.5px] font-bold cursor-pointer"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          <a
            href="#"
            className="block text-center w-full p-[15px] rounded-[15px] bg-[linear-gradient(180deg,#F4977E,#EE8164)] text-white font-extrabold text-[16px] cursor-pointer shadow-[0_10px_22px_-8px_rgba(238,129,100,0.7)]"
          >
            Iniciar sesión
          </a>

          <p className="text-center mt-6 m-0 text-[#94887B] text-[14.5px]">
            ¿Te invitó la guardería?{" "}
            <Link
              href="/activate-account"
              className="text-[#C5503A] font-extrabold"
            >
              Activá tu cuenta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
