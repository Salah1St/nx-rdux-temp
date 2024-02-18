"use client";
import { useDashboard } from "@/context/DashboardContext";

import DashboardLeftSideBar from "./left-side-bar/DashboardLeftSideBar";
import DashboardRightSideBar from "./right-side-bar/DashboardRightSideBar";
import { ReactNode } from "react";
import DashboardHeader from "./header/DashboardHeader";

interface DashboardProps {
  children: ReactNode;
}

export default function Dashboard({ children }: DashboardProps) {
  const { toggleLeftSideBar, handleToggleLeftSideBar, toggleRightSideBar, handleToggleRightSideBar } = useDashboard();

  return (
    <div className="w-screen h-screen flex ">
      <DashboardLeftSideBar show={toggleLeftSideBar} />
      <div className="relative h-full w-10 flex flex-col flex-grow">
        <DashboardHeader handleToggleLeftSideBar={handleToggleLeftSideBar} handleToggleRightSideBar={handleToggleRightSideBar} />
        <div className="h-10 flex-grow">{children}</div>
        <div className="absolute w-full bottom-0 left-0 z-50 h-10 bg-gradient-to-t from-[rgba(255,255,255,0.5)] to-transparent" />
      </div>
      <DashboardRightSideBar show={toggleRightSideBar} />
    </div>
  );
}
