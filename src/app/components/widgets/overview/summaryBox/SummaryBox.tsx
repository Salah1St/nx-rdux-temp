import icons from "@/asset/icons";
import Image from "next/image";

export default function SummaryBox() {
  return (
    <div className="w-64 p-6 flex flex-col gap-3 rounded-2xl bg-primary-brand-100">
      <div className="text-sm font-bold">Carbon Footprint</div>
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">721K</div>
        <div className="flex justify-center items-center gap-1">
          <div className="text-xs">+11.01%</div>
          <Image src={icons.arrowRise} alt="" />
        </div>
      </div>
    </div>
  );
}
