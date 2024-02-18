import React from "react";
import ChartLine from "@element/ChartLine";
import { ChartdataSrcs, LineChartdataSrcs } from "@/model/interface";

interface props {
  data: LineChartdataSrcs[];
}
function LineChartWidget({ data }: props) {
  return (
    <div className="w-full h-full bg-primary-gray-50 rounded-2xl flex flex-col pl-4 pt-4">
      <h2>Carbon credit</h2>
      {data.length > 0 && <ChartLine rawData={data} />}
    </div>
  );
}

export default LineChartWidget;
