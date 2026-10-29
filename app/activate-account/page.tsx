import SunIcon from "@/app/_components/SunIcon";
import { invitation } from "@/app/_data/auth";
import ActivateAccountForm from "./_components/ActivateAccountForm";

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
            style={{
              backgroundColor: invitation.avatarBg,
              color: invitation.avatarText,
            }}
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

        <ActivateAccountForm invitation={invitation} />
      </div>
    </div>
  );
}
