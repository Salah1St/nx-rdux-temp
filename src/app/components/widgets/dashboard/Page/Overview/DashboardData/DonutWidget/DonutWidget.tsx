import { ChartdataSrcs } from "@/model/interface";
import ScopeItem from "./ScopeItem";
import ChartDoughnut from "@element/ChartDoughnut";

interface props {
  data: ChartdataSrcs[];
  isTitle?: boolean;
  title: string;
}
export default function DonutWidget({ data, isTitle = true, title }: props) {
  return (
    <div className="w-full h-full max-h-[300px] bg-primary-gray-50 rounded-2xl  flex flex-col p-2  lg:p-6 ">
      {isTitle && <div className="w-full font-bold text-sm">{title}</div>}
      <div className=" w-full h-10 flex flex-grow">
        <ChartDoughnut rawData={data} />
        <ScopeItem rawData={data} />
      </div>
    </div>
  );
}
