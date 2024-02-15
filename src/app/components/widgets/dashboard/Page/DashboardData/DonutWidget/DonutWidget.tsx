import DoughnutChart from "@element/DoughnutChart";
import ScopeItem from "./ScopeItem";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function DonutWidget() {
  const data = [
    { type: "Direct", amount: 386 },
    { type: "Indirect", amount: 458 },
    { type: "Indirect", amount: 288 },
  ];

  const text = "90M Tons";

  const sum = data?.reduce((acc, item) => {
    acc += item.amount;
    return acc;
  }, 0);

  return (
    <div className="w-full bg-primary-gray-50 rounded-2xl grid grid-cols-1  p-6">
      <div className="w-full font-bold text-sm">Carbon Emission Summary</div>
      <div className=" grid grid-cols-2">
        <div className="w-full col-span-1">
          <DoughnutChart data={data} text={text} />
        </div>
        <div className="flex flex-col gap-3 w-full justify-center items-start whitespace-nowrap">
          {data.map((item, index) => (
            <ScopeItem key={index} order={index + 1} type={item.type} percentage={((item.amount / sum) * 100).toFixed(1)} />
          ))}
        </div>
      </div>
    </div>
  );
}
