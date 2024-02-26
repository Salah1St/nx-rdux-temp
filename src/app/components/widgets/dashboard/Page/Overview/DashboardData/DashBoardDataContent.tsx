"use client";
import React, { useEffect } from "react";

import DonutWidget from "./DonutWidget/DonutWidget";
import BarChartWidget from "./BarChartWidget/BarChartWidget";
import Block from "@element/Block";
import LineChartWidget from "./LineChartWidget/LineChartWidget";
import EmissionList from "./BarChartWidget/EmissionList";
import { useDashboard } from "@/context/DashboardContext";
import { useAppSelector } from "@/hooks/useRedux";
import Record from "./CountingRecord/Record";

function DashBoardDataContent() {
  const { emissionFactor, footPrintFactor, carbonCredit, totalEmissionLine, totalFootPrintLine, carbonDonut } = useDashboard();
  const dashboardSize = useAppSelector((s) => s.media.dashboardSize);

  return (
    <div className=" w-full max-h-full grid grid-cols-1 gap-4  overflow-y-scroll overflow-x-hidden  py-4  no-scrollbar ">
      <div className={`w-full h-fit grid  gap-4 ${dashboardSize > 640 ? `h-[120px] grid-cols-3` : `h-[400px] grid-cols-1 grid-rows-3`}`}>
        <Record title={"Carbon Footprint"} amount={Math.random() * 1e9} percent={Math.random() * 2} />
        <Record title={"Active User"} amount={Math.random() * 1e6} percent={Math.random() * 2} />
        <Record title={"New User"} amount={Math.random() * 1e3} percent={Math.random() * 2} />
      </div>
      <Block ratio="50%">
        <DonutWidget title="Carbon Emission Summary" data={carbonDonut} isTitle={dashboardSize > 640} />
        <BarChartWidget title="Carbon Credit" data={carbonCredit} isTitle={dashboardSize > 640} />
      </Block>
      <Block ratio="60%">
        <LineChartWidget title="Total Emission" data={totalEmissionLine} isTitle={dashboardSize > 640} />
        <EmissionList title="Emission Factors" data={emissionFactor} isTitle={dashboardSize > 640} />
      </Block>
      <Block ratio="60%">
        <LineChartWidget title="Total Footprint" data={totalFootPrintLine} isTitle={dashboardSize > 640} />
        <EmissionList title="Footprint Factors" data={footPrintFactor} isTitle={dashboardSize > 640} />
      </Block>
    </div>
  );
}

export default DashBoardDataContent;
