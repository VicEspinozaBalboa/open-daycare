"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";

export default function LoginForm() {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-[392px]">
      <h2 className="font-display font-semibold text-[30px] m-0 mb-[6px] text-[#3F362E]">
        Iniciar sesión
      </h2>
      <p className="m-0 mb-[28px] text-[#94887B] text-[15px]">
        Ingresá para ver el día de hoy.
      </p>

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
        placeholder="tu@email.com"
        className="w-full p-[14px_16px] rounded-[14px] border-[1.5px] border-[#EADFD0] bg-white text-[15px] text-[#3F362E] mb-[18px] placeholder:text-[#B6A99B] focus:outline-none"
      />

      <label
        htmlFor="password"
        className="block text-[12px] font-bold tracking-[0.7px] text-[#94887B] mb-[8px]"
      >
        CONTRASEÑA
      </label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
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

      <button
        type="submit"
        className="block text-center w-full p-[15px] rounded-[15px] bg-[linear-gradient(180deg,#F4977E,#EE8164)] text-white font-extrabold text-[16px] cursor-pointer shadow-[0_10px_22px_-8px_rgba(238,129,100,0.7)]"
      >
        Iniciar sesión
      </button>

      <p className="text-center mt-6 m-0 text-[#94887B] text-[14.5px]">
        ¿Te invitó la guardería?{" "}
        <Link href="/activate-account" className="text-[#C5503A] font-extrabold">
          Activá tu cuenta
        </Link>
      </p>
    </form>
  );
}
