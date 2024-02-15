"use client";
import React, { useEffect, useRef } from "react";

import DashboardLocation from "@widget/dashboard/Page/DropdownLocation/DashboardLocation";
import DashBoardDataContent from "./DashboardData/DashBoardDataContent";
import { useDashboard } from "@/context/DashboardContext";
import { setTimeout } from "timers";

function DashboardContent() {
  const { dashboardRef } = useDashboard();

  return (
    <div ref={dashboardRef} className="w-full h-full py-4 px-8 ">
      <DashboardLocation />
      <DashBoardDataContent />
    </div>
  );
}

export default DashboardContent;
