import SunIcon from "@/app/_components/SunIcon";
import LoginForm from "./_components/LoginForm";

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
        <LoginForm />
      </div>
    </div>
  );
}
