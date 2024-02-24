import { ChartdataSrcs } from "@/model/interface";
import ChartVerticalBar from "@element/ChartVerticalBar";
import React from "react";

interface Props {
  data: ChartdataSrcs[];
  isTitle?: boolean;
}
function BarChartWidget({ data, isTitle = true }: Props) {
  return (
    <div className="w-full h-full max-h-[300px] bg-primary-gray-50 rounded-2xl flex flex-col  p-4">
      {isTitle && <h2>Carbon credit</h2>}
      <ChartVerticalBar rawData={data} />
    </div>
  );
}

export default BarChartWidget;
