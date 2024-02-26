import { ChartdataSrcs } from "@/model/interface";
import ChartVerticalBar from "@element/ChartVerticalBar";
import React from "react";

interface Props {
  data: ChartdataSrcs[];
  isTitle?: boolean;
  title: string;
}
function BarChartWidget({ data, isTitle = true, title }: Props) {
  return (
    <div className="w-full h-full max-h-[300px] bg-primary-gray-50 rounded-2xl flex flex-col  p-4">
      {isTitle && <div className="w-full font-bold text-sm">{title}</div>}
      <ChartVerticalBar rawData={data} />
    </div>
  );
}

export default BarChartWidget;
