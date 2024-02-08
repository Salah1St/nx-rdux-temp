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
    <div className="w-screen h-screen flex overflow-hidden">
      {/* <div className={`transform transition-transform ease-in-out ${toggleLeftSideBar ? "translate-x-0" : "-translate-x-full"}`}>
      </div> */}
      <DashboardLeftSideBar show={toggleLeftSideBar} />
      <div className="flex-grow">
        <DashboardHeader handleToggleLeftSideBar={handleToggleLeftSideBar} handleToggleRightSideBar={handleToggleRightSideBar} />
        {children}
      </div>
      {/* <div className={`transform transition-transform ease-in-out ${toggleRightSideBar ? "translate-x-0" : "translate-x-full"}`}> */}
      <DashboardRightSideBar show={toggleRightSideBar} />
      {/* </div> */}
    </div>
  );
}
