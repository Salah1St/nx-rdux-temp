import icons from "@/asset/icons";
import Image from "next/image";
import Dashboards from "./Dashboards";
import OrganisationTeam from "./OrganisationTeam";
import Supports from "./Supports";
import UserInfo from "./UserInfo";
import Logo from "./Logo";
import React from "react";

interface props {
  show: boolean;
}
export default function DashboardLeftSideBar({ show }: props) {
  return (
    <div className={` w-[280px] bg-slate-50 h-screen ${show ? " animate-slide-left-re " : "animate-slide-left "} `}>
      <div className="p-4 h-full flex flex-col gap-8 overflow-scroll">
        <Logo />
        <UserInfo />
        <Dashboards />
        <OrganisationTeam />
        <Supports />
      </div>
    </div>
  );
}
