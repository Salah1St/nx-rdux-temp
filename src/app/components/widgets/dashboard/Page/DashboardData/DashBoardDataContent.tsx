"use client";
import React, { useEffect } from "react";
import CountingRecordComponents from "./CountingRecord/CountingRecordComponents";
import DonutWidget from "./DonutWidget/DonutWidget";
import BarChartWidget from "./BarChartWidget/BarChartWidget";
import Block from "@element/Block";
import LineChartWidget from "./LineChartWidget/LineChartWidget";
import EmissionList from "./BarChartWidget/EmissionList";
import { useDashboard } from "@/context/DashboardContext";

function DashBoardDataContent() {
  const { emissionFactor, carbonCredit, carbonCreditLine, carbonDonut } = useDashboard();
  return (
    <div className=" w-full max-h-full grid grid-cols-1 gap-4  overflow-y-scroll overflow-x-hidden  py-4  no-scrollbar ">
      <CountingRecordComponents />
      <Block ratio="50%">
        <DonutWidget data={carbonDonut} />
        <BarChartWidget data={carbonCredit} />
      </Block>
      <Block ratio="70%">
        <LineChartWidget data={carbonCreditLine} />
        <EmissionList data={emissionFactor} />
      </Block>
      <Block ratio="60%">
        <LineChartWidget data={carbonCreditLine} />
        <EmissionList data={emissionFactor} />
      </Block>
    </div>
  );
}

export default DashBoardDataContent;
