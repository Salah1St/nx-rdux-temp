import React from "react";
import ChartLine from "@element/ChartLine";
import { ChartdataSrcs, LineChartdataSrcs } from "@/model/interface";

interface props {
  data: LineChartdataSrcs[];
  isTitle?: boolean;
}
function LineChartWidget({ data, isTitle = true }: props) {
  return (
    <div className="w-full h-full bg-primary-gray-50 rounded-2xl flex flex-col pl-4 pt-4">
      {isTitle && <h2>Carbon credit</h2>}
      {data.length > 0 && <ChartLine rawData={data} />}
    </div>
  );
}

export default LineChartWidget;
