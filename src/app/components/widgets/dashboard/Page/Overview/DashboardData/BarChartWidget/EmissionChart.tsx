import { primaryColor } from "@/model/constants";
import { ChartdataSrcs } from "@/model/interface";
import ChartHorizontalBar from "@element/ChartHorizontalBar";
import React from "react";

interface Props {
  rawData: ChartdataSrcs[];
}
function EmissionChart({ rawData }: Props) {
  const labels = rawData.map((i) => i.label);
  const dataSrc = rawData.map((i) => i.data);
  const max = Math.max(...dataSrc);
  const dataPercent = dataSrc.map((i, d) => Math.round((i * 100) / max));

  const arr = new Array(primaryColor.length).fill(max / primaryColor.length).map((i, d) => i * (d + 1));

  const colorIndex: string[] = [];
  for (const id in dataSrc) {
    for (const key in arr) {
      if (arr[key] < dataSrc[id]) {
        if (+key === arr.length - 1) {
          colorIndex.push(primaryColor[key]);
        }
      } else {
        colorIndex.push(primaryColor[key]);

        break;
      }
    }
  }
  return (
    <div className={`w-full h-full max-h-[300px] flex bg-primary-gray-50 rounded-2xl p-4 `}>
      <div className={`w-full flex-grow  grid grid-rows-[${rawData.length}] items-center`}>
        {labels.map((i) => (
          <div key={i}>{i}</div>
        ))}
      </div>
      <div className={`w-full  flex-grow-[2] grid grid-rows-[${rawData.length}] items-center`}>
        {dataPercent.map((i, d) => {
          return <div key={d} style={{ width: `${i}%`, backgroundColor: `${colorIndex[d]}` }} className={`h-2 rounded-xl shadow-md `}></div>;
        })}
      </div>
    </div>
  );
}

export default EmissionChart;
