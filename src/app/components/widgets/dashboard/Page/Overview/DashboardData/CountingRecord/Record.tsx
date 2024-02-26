import React from "react";
import { useAppSelector } from "@/hooks/useRedux";
interface props {
  title: string;
  percent: number;
  amount: number;
}
function Record({ title, amount, percent }: props) {
  const dashboardSize = useAppSelector((s) => s.media.dashboardSize);
  let showcase = "";
  switch (true) {
    case amount >= 1e12:
      showcase = (amount / 1e12).toFixed(1) + "T";
      break;
    case amount >= 1e9:
      showcase = (amount / 1e9).toFixed(1) + "B";
      break;
    case amount >= 1e6:
      showcase = (amount / 1e6).toFixed(1) + "M";
      break;
    case amount >= 1e3:
      showcase = (amount / 1e3).toFixed(1) + "K";
      break;
    default:
      showcase = amount.toFixed(0).toString();
      break;
  }
  let showPercent;
  if (percent > 1) {
    showPercent = "+ " + (percent * 100).toFixed(2) + "%";
  } else {
    showPercent = "- " + (percent * 100).toFixed(2) + "%";
  }
  return (
    <div className={`${dashboardSize > 640 ? "h-[120px]" : "h-[100px] px-8"} bg-primary-brand-100 rounded-2xl grid grid-rows-2 items-center px-4  py-4`}>
      <div className="flex">
        <div className="text-base  font-bold whitespace-nowrap">{title}</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">{showcase}</div>
        <div>{showPercent}</div>
      </div>
    </div>
  );
}

export default Record;
