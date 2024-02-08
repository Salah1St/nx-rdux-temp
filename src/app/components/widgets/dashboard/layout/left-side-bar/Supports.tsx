import icons from "@/asset/icons";
import Image from "next/image";

export default function Supports() {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-gray-400 font-bold text-xs">Supports</div>
      <div className="flex gap-2 px-[6px] py-1">
        <div className="w-6 h-6 flex justify-center items-center">
          <Image src={icons.rightVector} alt="" />
        </div>
        <div className="text-gray-600 font-bold flex items-center">Learn About Carbon</div>
      </div>
    </div>
  );
}
