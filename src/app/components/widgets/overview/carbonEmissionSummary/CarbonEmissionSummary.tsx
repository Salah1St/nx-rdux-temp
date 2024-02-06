import DoughnutChart from "@element/DoughnutChart";
import ScopeItem from "./ScopeItem";

export default function CarbonEmissionSummary() {
  const data = [
    { type: "Direct", amount: 386 },
    { type: "Indirect", amount: 455 },
    { type: "Indirect", amount: 288 },
  ];

  const text = "90M Tons";

  const sum = data?.reduce((acc, item) => {
    acc += item.amount;
    return acc;
  }, 0);

  return (
    <div className="w-1/2 bg-primary-gray-50 rounded-2xl flex flex-col gap-4 p-6">
      <div className="font-bold text-sm">Carbon Emission Summary</div>
      <div className="flex justify-start items-center gap-10 h-[196px]">
        <div className="w-32">
          <DoughnutChart data={data} text={text} />
        </div>
        <div className="flex flex-col gap-3 w-full">
          {data.map((item, index) => (
            <ScopeItem order={index + 1} type={item.type} percentage={((item.amount / sum) * 100).toFixed(1)} />
          ))}
        </div>
      </div>
    </div>
  );
}
