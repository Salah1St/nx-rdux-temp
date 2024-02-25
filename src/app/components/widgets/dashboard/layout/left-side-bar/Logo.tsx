import icons from "@/asset/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"/"} className="w-full flex items-center gap-4 rounded-xl hover:bg-slate-100 active:scale-95 p-2" role="button">
      <Image className="rounded-full" height={32} src={icons.ccblogo} alt="" />
      <div className="font-bold">CCB Thailand</div>
    </Link>
  );
}

export default Logo;
