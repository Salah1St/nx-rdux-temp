"use client";
import icons from "@/asset/icons";
import { Thailand, provinces } from "@/asset/json";
import { useDashboard } from "@/context/DashboardContext";
import { useClickOutside } from "@/utils/handleClickoutSide";
import Selection, { OptionItem } from "@element/Selection";
import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";

interface props {}
function CreateAndJoinSearchBar({}: props) {
  const [search, setSearch] = useState("");
  const handleSearch = () => {};
  return (
    <div className="w-full h-20 flex justify-between items-center ">
      <div className="flex h-full flex-1 p-5">
        <input
          className=" w-4 grow border  border-r-0 border-slate-200 rounded-lg rounded-r-none p-2  outline-primary-brand-400 "
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        />
        <button className="text-white w-32 bg-primary-brand-400 rounded-lg rounded-l-none hover:scale-105  active:scale-100 px-2 py-1" type="button">
          Search
        </button>
      </div>
      <div className="flex-1 flex  flex-col items-end px-4">
        <div>Cannot find your team?</div>
        <Link className="text-link hover:scale-105 active:scale-95" href={"create-join/create_new_team"}>
          Create an organisation team
        </Link>
      </div>
    </div>
  );
}

export default CreateAndJoinSearchBar;
