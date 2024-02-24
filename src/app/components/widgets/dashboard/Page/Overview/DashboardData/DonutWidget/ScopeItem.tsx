import { ChartdataSrcs } from "@/model/interface";

interface props {
  rawData: ChartdataSrcs[];
}
export default function ScopeItem({ rawData }: props) {
  return (
    <div className="w-fit h-full flex flex-col items-start justify-center gap-2">
      {rawData.map((i, d) => (
        <div className="w-full flex justify-evenly items-center gap-2" key={d}>
          <div style={{ backgroundColor: `${i.color}` }} className="w-2 h-2 rounded-full "></div>
          <div className="w-full flex justify-between gap-2">
            <div>{`Scope ${d + 1} - ${i.label}`}</div>
            <div>{i.data}%</div>
          </div>
        </div>
      ))}
    </div>
  );
}
