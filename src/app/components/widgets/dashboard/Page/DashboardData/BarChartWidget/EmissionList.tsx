import { ChartdataSrcs } from "@/model/interface";
import React from "react";
import EmissionChart from "./EmissionChart";

interface props {
  data: ChartdataSrcs[];
}
function EmissionList(props: props) {
  const { data } = props;
  return (
    <div className="w-full h-full max-h-[300px] flex flex-col justify-center  bg-primary-gray-50 rounded-2xl p-4">
      <h1>Emission Factors</h1>
      <EmissionChart rawData={data} />
    </div>
  );
}

export default EmissionList;
