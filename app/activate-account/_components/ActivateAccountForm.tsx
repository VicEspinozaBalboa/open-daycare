"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import type { Invitation } from "@/app/_data/auth";

export default function ActivateAccountForm({
  invitation,
}: {
  invitation: Invitation;
}) {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="code"
        className="block text-[12px] font-bold tracking-[0.7px] text-[#94887B] mb-[8px]"
      >
        CÓDIGO DE INVITACIÓN
      </label>
      <input
        id="code"
        name="code"
        autoComplete="one-time-code"
        placeholder={invitation.code}
        className="w-full p-[14px_16px] rounded-[14px] border-[1.5px] border-[#EADFD0] bg-white text-[18px] tracking-[3px] font-bold text-[#3F362E] mb-[18px] placeholder:text-[#B6A99B] focus:outline-none font-display"
      />

      <label
        htmlFor="email"
        className="block text-[12px] font-bold tracking-[0.7px] text-[#94887B] mb-[8px]"
      >
        EMAIL
      </label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder={invitation.email}
        className="w-full p-[14px_16px] rounded-[14px] border-[1.5px] border-[#EADFD0] bg-white text-[15px] text-[#3F362E] mb-[18px] placeholder:text-[#B6A99B] focus:outline-none"
      />

      <label
        htmlFor="password"
        className="block text-[12px] font-bold tracking-[0.7px] text-[#94887B] mb-[8px]"
      >
        CREAR CONTRASEÑA
      </label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="new-password"
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
          Autorizo a la guardería a tomar y compartir fotos de mi hijo dentro de
          la app.
        </span>
      </label>

      <button
        type="submit"
        className="block text-center w-full p-[15px] rounded-[15px] bg-[linear-gradient(180deg,#F4977E,#EE8164)] text-white font-extrabold text-[16px] cursor-pointer shadow-[0_10px_22px_-8px_rgba(238,129,100,0.7)]"
      >
        Activar mi cuenta
      </button>

      <p className="text-center mt-[22px] m-0 text-[#94887B] text-[14.5px]">
        ¿Ya tenés cuenta?{" "}
        <Link href="/login" className="text-[#C5503A] font-extrabold">
          Iniciar sesión
        </Link>
      </p>
    </form>
  );
}
