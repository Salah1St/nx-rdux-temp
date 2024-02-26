import { ChartdataSrcs } from "@/model/interface";
import React from "react";
import EmissionChart from "./EmissionChart";

interface props {
  data: ChartdataSrcs[];
  isTitle?: boolean;
  title: string;
}
function EmissionList({ data, isTitle = true, title }: props) {
  return (
    <div className="w-full h-full max-h-[300px] flex flex-col justify-center  bg-primary-gray-50 rounded-2xl p-4">
      {isTitle && <div className="w-full font-bold text-sm">{title}</div>}

      <EmissionChart rawData={data} />
    </div>
  );
}

export default EmissionList;
