import icons from "@/asset/icons";
import Image from "next/image";
import Dashboards from "./Dashboards";
import OrganisationTeam from "./OrganisationTeam";
import Supports from "./Supports";
import UserInfo from "./UserInfo";

interface props {
  show: boolean;
}
export default function DashboardLeftSideBar({ show }: props) {
  return (
    <div className={`max-w-[300px] w-[300px] h-screen ${show ? " animate-slide-left-re " : "animate-slide-left "} `}>
      <div className="p-4 h-full grid grid-cols-1  gap-8 overflow-scroll">
        <div className="flex flex-col items-center gap-3 ">
          <div className="w-[51px] h-[51px] rounded-2xl bg-[#4E5BA6]"></div>
          <div className="font-bold">CCB Thailand</div>
          <UserInfo />
        </div>

        <Dashboards />

        <OrganisationTeam />

        <Supports />
      </div>
    </div>
  );
}
