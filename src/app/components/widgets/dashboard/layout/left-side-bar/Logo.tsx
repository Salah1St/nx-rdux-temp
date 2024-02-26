import icons from "@/asset/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"/"} className="w-full flex items-center gap-4  rounded-xl hover:bg-slate-100 active:scale-95 p-2" role="button">
      <div className="flex justify-center items-center rounded-full p-2">
        <Image height={32} src={icons.Ccb} alt="" />
      </div>
      <div className="font-bold ">CCB Thailand</div>
    </Link>
  );
}

export default Logo;
