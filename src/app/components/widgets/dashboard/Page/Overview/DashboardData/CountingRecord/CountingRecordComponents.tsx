import React from "react";
import { useAppSelector } from "@/hooks/useRedux";

function CountingRecordComponents() {
  const dashboardSize = useAppSelector((s) => s.media.dashboardSize);

  return (
    <div className={`w-full h-fit grid  gap-4 ${dashboardSize > 640 ? `h-[120px] grid-cols-3` : `h-[400px] grid-cols-1 grid-rows-3`}`}>
      <Record dashboardSize={dashboardSize} />
      <Record dashboardSize={dashboardSize} />
      <Record dashboardSize={dashboardSize} />
    </div>
  );
}

function Record({ dashboardSize }: { dashboardSize: number }) {
  return (
    <div className={`${dashboardSize > 640 ? "h-[120px]" : "h-[100px] px-8"} bg-primary-brand-100 rounded-2xl grid grid-rows-2 items-center px-4  py-4`}>
      <div className="flex">
        <div className="text-base md:text-xl font-bold whitespace-nowrap">Carbon Footprint</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-2xl md:text-[32px] font-bold">721K</div>
        <div>+110%</div>
      </div>
    </div>
  );
}

export default CountingRecordComponents;
