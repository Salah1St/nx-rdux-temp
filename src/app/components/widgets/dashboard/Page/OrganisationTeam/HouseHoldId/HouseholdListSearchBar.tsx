"use client";
import icons from "@/asset/icons";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

function HouseholdListSearchBar() {
  const [search, setSearch] = useState("");
  const handleSearch = () => {};
  return (
    <div className="w-full  flex justify-start items-center ">
      <div className="flex h-full flex-1 ">
        <input
          className=" w-4 grow border  border-r-0 border-slate-200 rounded-lg rounded-r-none p-2  outline-primary-brand-400 "
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        />
        <button className="text-white w-32 bg-primary-brand-400 rounded-lg rounded-l-none hover:scale-105  active:scale-100 px-2 py-1" type="button">
          Search
        </button>
      </div>
      <div className="w-full flex-1 flex  justify-end items-center ">
        <Link href={"#"} className="text-slate-400 font-semibold  flex  justify-end items-center  hover:scale-105 active:scale-95">
          <Image height={32} src={icons.plus} alt="" />
          Add Household
        </Link>
      </div>
    </div>
  );
}

export default HouseholdListSearchBar;
