import React from "react";
import VerticalBarChart from "@element/VerticalBarChart";

function BarChartWidget() {
  const data = new Array(5).fill(1).map((i, d) => d * 1e6);

  return (
    <div className="w-full h-full bg-primary-gray-50 rounded-2xl grid grid-cols-1  p-6">
      <VerticalBarChart rawData={data} />
    </div>
  );
}

export default BarChartWidget;
