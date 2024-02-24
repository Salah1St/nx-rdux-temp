import icons from "@/asset/icons";
import Image from "next/image";
import Link from "next/link";

export default function OrganisationTeam() {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-gray-400 font-bold text-xs">Organisation Team</div>
      <CreateAndJoinTeamButton />
    </div>
  );
}

function CreateAndJoinTeamButton() {
  return (
    <div className="flex gap-2 px-[6px] py-1">
      <div role="button" className="w-6 h-6 flex justify-center items-center rounded-full ">
        <Image src={icons.plus} alt="" />
      </div>
      <Link href={"/organisation/create-join"} replace role="button" className="text-gray-400  hover:text-primary-brand-400 font-bold flex-grow flex items-center active:scale-90">
        Create/Join Team
      </Link>
      <div className="w-6 h-6 flex justify-center items-center">
        <Image src={icons.helpCircle} alt="" />
      </div>
    </div>
  );
}
