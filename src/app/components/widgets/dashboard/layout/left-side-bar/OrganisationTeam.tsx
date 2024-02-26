import icons from "@/asset/icons";
import LinkButton from "@element/primary/LinkButton";
import LinkButtonDropdown from "@element/primary/LinkButtonDropdown";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function OrganisationTeam() {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-gray-400 font-bold text-xs">Organisation Team</div>
      <TeamButton name={"hua_phra_subdistrict"} />
      <TeamButton name={"phra_nakhon_district"} />
      <CreateAndJoinTeamButton />
    </div>
  );
}
function TeamButton({ name }: { name: string }) {
  const path = `/organisation_team/${name}`;
  const title = name
    .split("_")
    .map((i) => i.charAt(0).toUpperCase() + i.slice(1))
    .join(" ");
  return (
    <LinkButtonDropdown path={path} title={title}>
      <LinkButton disable path={`/organisation_team/${name}/team_members`} title={"Team Members"} />
      <LinkButton path={`/organisation_team/${name}/household_list`} title={"Household List"} />
    </LinkButtonDropdown>
  );
}

function CreateAndJoinTeamButton() {
  return (
    <div className="flex gap-2 px-[6px] py-1">
      <div role="button" className="w-6 h-6 flex justify-center items-center rounded-full ">
        <Image src={icons.plus} alt="" />
      </div>
      <Link href={"/organisation_team/create_join_team"} role="button" className="text-black  hover:text-primary-brand-400 font-bold flex-grow flex items-center active:scale-90">
        Create/Join Team
      </Link>
      <div className="w-6 h-6 flex justify-center items-center">
        <Image src={icons.helpCircle} alt="" />
      </div>
    </div>
  );
}
