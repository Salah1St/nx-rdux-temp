import icons from "@/asset/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function OrganisationTeam() {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-gray-400 font-bold text-xs">Organisation Team</div>

      <TeamButton />
      <CreateAndJoinTeamButton />
    </div>
  );
}
function TeamButton() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const handleClick = () => {
    if (!pathname.includes(`/organisation_team/${name}`)) {
      setShow(true);
    }
  };

  useEffect(() => {
    console.log(pathname, !pathname.includes(`/organisation_team/${name}`), show);
    if (!pathname.includes(`/organisation_team/${name}`)) {
      setShow(false);
    }
  }, [pathname]);

  const name = "hua_phra_subdistrict";
  return (
    <div className="flex  flex-col gap-2 px-[6px] py-1">
      <div className="w-full flex gap-2 px-2 py-1 text-black   hover:text-primary-brand-400 cursor-pointer" onClick={handleClick}>
        {!show ? <Image height={12} src={icons.moreThan} alt="" /> : <Image height={12} className="rotate-90" src={icons.moreThan} alt="" />}
        <Link href={`/organisation_team/${name}`} role="button" className="font-bold flex grow items-center active:scale-95">
          {name.split("_").map((i) => i.charAt(0).toUpperCase() + i.slice(1) + " ")}
        </Link>
      </div>
      {show && (
        <>
          <div className="w-full flex gap-4 px-2 py-1 text-black   hover:text-primary-brand-400 cursor-pointer">
            <Image className="invisible" height={12} src={icons.moreThan} alt="" />
            <Link href={`/organisation_team/${name}/team_members`} role="button" className="text-sm font-semibold flex grow items-center active:scale-95">
              {"Team Members"}
            </Link>
          </div>
          <div className="w-full flex gap-4 px-2 py-1 text-black   hover:text-primary-brand-400 cursor-pointer">
            <Image className="invisible" height={12} src={icons.moreThan} alt="" />
            <Link href={`/organisation_team/${name}/household_list`} role="button" className="text-sm font-semibold flex grow items-center active:scale-95">
              {"Household List"}
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

function CreateAndJoinTeamButton() {
  return (
    <div className="flex gap-2 px-[6px] py-1">
      <div role="button" className="w-6 h-6 flex justify-center items-center rounded-full ">
        <Image src={icons.plus} alt="" />
      </div>
      <Link
        href={"/organisation_team/create_join_team"}
        replace
        role="button"
        className="text-black  hover:text-primary-brand-400 font-bold flex-grow flex items-center active:scale-90"
      >
        Create/Join Team
      </Link>
      <div className="w-6 h-6 flex justify-center items-center">
        <Image src={icons.helpCircle} alt="" />
      </div>
    </div>
  );
}
