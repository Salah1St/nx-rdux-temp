import React, { Suspense } from "react";
import CountingRecordComponents from "./CountingRecord/CountingRecordComponents";
import DonutWidget from "./DonutWidget/DonutWidget";
import BarChartWidget from "./BarChartWidget/BarChartWidget";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useAppSelector } from "@/hooks/useRedux";
import { useDashboard } from "@/context/DashboardContext";
import { Skeleton } from "@/components/ui/skeleton";
import Block from "@element/Block";

function DashBoardDataContent() {
  return (
    <div className="h-full w-full grid grid-cols-1  overflow-y-scroll overflow-x-hidden  py-4">
      <CountingRecordComponents />
      <Block ratio="50%">
        <DonutWidget />
        <BarChartWidget />
      </Block>
      <Block ratio="70%">
        <DonutWidget />
        <BarChartWidget />
      </Block>
    </div>
  );
}

export default DashBoardDataContent;
