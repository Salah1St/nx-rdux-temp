import React from "react";
import ChartLine from "@element/ChartLine";

function LineChartWidget() {
  const CurrentData = new Array(5).fill(1).map((i, d) => Math.random() * 1e6);
  const CompareData = new Array(5).fill(1).map((i, d) => Math.random() * 1e6);

  return (
    <div className="w-full h-full bg-primary-gray-50 rounded-2xl grid grid-cols-1  p-6">
      <ChartLine CurrentData={CurrentData} CompareData={CompareData} />
    </div>
  );
}

export default LineChartWidget;
