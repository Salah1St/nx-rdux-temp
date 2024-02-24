"use client";
import icons from "@/asset/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  handleToggleLeftSideBar: () => void;
  handleToggleRightSideBar: () => void;
}

export default function DashboardHeader({ handleToggleLeftSideBar, handleToggleRightSideBar }: Props) {
  const path = usePathname().split("/").slice(1);
  let path_origin = "";
  if (typeof window !== "undefined") {
    path_origin = window.location.origin;
  }
  return (
    <div className="w-full h-[68px] border-b-[1px] border-opacity-10 py-5 px-7 flex items-center justify-between">
      <div className="flex gap-2">
        <div className={`p-2 border border-transparent rounded-full flex justify-center items-center hover:border-primary-brand-400 cursor-pointer`}>
          <Image onClick={handleToggleLeftSideBar} src={icons.sidebar} alt="" />
        </div>
        <div className="flex justify-center items-center">
          {path.map((i, d) => (
            <div key={d} className="flex gap-2">
              <Link href={`${path_origin}/${path.slice(0, d + 1).reduce((p, c) => `${p}/${c}`)}`} className="hover:underline pl-2">
                {i.split("_").map((i) => i.charAt(0).toUpperCase() + i.slice(1) + " ")}
              </Link>
              <div>/</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        <Image src={icons.bell} alt="" />
        <Image onClick={handleToggleRightSideBar} className="scale-x-[-1]" src={icons.sidebar} alt="" />
      </div>
    </div>
  );
}
