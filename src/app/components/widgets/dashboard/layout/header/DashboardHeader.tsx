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
    <div className="w-full flex items-center justify-between px-8 py-4">
      <div className="flex gap-2">
        <div onClick={handleToggleLeftSideBar} className={`p-2  rounded-full flex justify-center items-center hover:bg-slate-100 active:scale-90  cursor-pointer`}>
          <Image height={20} src={icons.sidebar} alt="" />
        </div>
        <div className="flex justify-center items-center">
          {path.map((i, d) => (
            <div key={d} className="flex gap-2">
              <Link href={`/${path.slice(0, d + 1).reduce((p, c) => `${p}/${c}`)}`} className="hover:underline pl-2">
                {i.split("_").map((i) => i.charAt(0).toUpperCase() + i.slice(1) + " ")}
              </Link>
              <div>/</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex  gap-2 justify-between items-center">
        <div className={`p-2  rounded-full flex justify-center items-center hover:bg-slate-100 active:scale-90  cursor-pointer`}>
          <Image height={24} src={icons.bell} alt="" />
        </div>
        <div onClick={handleToggleRightSideBar} className={`p-2  rounded-full flex justify-center items-center hover:bg-slate-100 active:scale-90  cursor-pointer`}>
          <Image height={20} className="scale-[-1]" src={icons.sidebar} alt="" />
        </div>
      </div>
    </div>
  );
}
