"use client";
import React, { Suspense, useEffect, useRef } from "react";

import DashboardLocation from "@widget/dashboard/Page/DropdownLocation/DashboardLocation";
import DashBoardDataContent from "./DashboardData/DashBoardDataContent";
import { useDashboard } from "@/context/DashboardContext";
import { setTimeout } from "timers";

function DashboardContent() {
  const { dashboardRef } = useDashboard();

  return (
    <div ref={dashboardRef} className="relative w-full h-full   p-8 ">
      <DashboardLocation />
      <DashBoardDataContent />
    </div>
  );
}

export default DashboardContent;
