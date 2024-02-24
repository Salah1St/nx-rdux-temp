"use client";
import React, { Suspense, useEffect, useRef } from "react";

import DashBoardDataContent from "./DashboardData/DashBoardDataContent";
import DashboardLocation from "./DropdownLocation/DashboardLocation";

function DashboardContent() {
  return (
    <div className="relative w-full h-full   p-8 ">
      <DashboardLocation />
      <DashBoardDataContent />
    </div>
  );
}

export default DashboardContent;
