"use client";
import React, { useEffect } from "react";
import CountingRecordComponents from "./CountingRecord/CountingRecordComponents";
import DonutWidget from "./DonutWidget/DonutWidget";
import BarChartWidget from "./BarChartWidget/BarChartWidget";
import Block from "@element/Block";
import LineChartWidget from "./LineChartWidget/LineChartWidget";
import EmissionList from "./BarChartWidget/EmissionList";
import { useDashboard } from "@/context/DashboardContext";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function DashBoardDataContent() {
  const { emissionFactor, carbonCredit, carbonCreditLine, carbonDonut } = useDashboard();
  const dashboardSize = useSelector((s: RootState) => s.media.dashboardSize);

  return (
    <div className=" w-full max-h-full grid grid-cols-1 gap-4  overflow-y-scroll overflow-x-hidden  py-4  no-scrollbar ">
      <CountingRecordComponents />
      <Block ratio="50%">
        <DonutWidget data={carbonDonut} isTitle={dashboardSize > 640} />
        <BarChartWidget data={carbonCredit} isTitle={dashboardSize > 640} />
      </Block>
      <Block ratio="70%">
        <LineChartWidget data={carbonCreditLine} isTitle={dashboardSize > 640} />
        <EmissionList data={emissionFactor} isTitle={dashboardSize > 640} />
      </Block>
      <Block ratio="60%">
        <LineChartWidget data={carbonCreditLine} isTitle={dashboardSize > 640} />
        <EmissionList data={emissionFactor} isTitle={dashboardSize > 640} />
      </Block>
    </div>
  );
}

export default DashBoardDataContent;
