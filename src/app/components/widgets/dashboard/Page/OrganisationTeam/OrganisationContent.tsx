"use client";
import React, { Suspense, useEffect, useRef } from "react";

import { useDashboard } from "@/context/DashboardContext";
import DashBoardDataContent from "../Overview/DashboardData/DashBoardDataContent";

function OrganisationContent() {
  return (
    <div className="relative w-full h-full   p-8 ">
      <DashBoardDataContent />
    </div>
  );
}

export default OrganisationContent;
