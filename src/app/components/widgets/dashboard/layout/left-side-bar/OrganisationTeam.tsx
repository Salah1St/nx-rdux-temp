import icons from "@/asset/icons";
import Image from "next/image";

export default function OrganisationTeam() {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-gray-400 font-bold text-xs">Organisation Team</div>
      <div className="flex gap-2 px-[6px] py-1">
        <div className="w-6 h-6 flex justify-center items-center">
          <Image src={icons.plus} alt="" />
        </div>
        <div className="text-gray-400 font-bold flex-grow flex items-center">Create/Join Team</div>
        <div className="w-6 h-6 flex justify-center items-center">
          <Image src={icons.helpCircle} alt="" />
        </div>
      </div>
    </div>
  );
}
