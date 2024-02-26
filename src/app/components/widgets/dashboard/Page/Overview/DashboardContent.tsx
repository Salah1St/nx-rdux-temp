"use client";
import React from "react";

import DashBoardDataContent from "./DashboardData/DashBoardDataContent";
import DashboardLocation from "./DropdownLocation/DashboardLocation";

function DashboardContent() {
  return (
    <div className="relative w-full h-full pt-8 px-8 ">
      <DashboardLocation />
      <DashBoardDataContent />
    </div>
  );
}

export default DashboardContent;
