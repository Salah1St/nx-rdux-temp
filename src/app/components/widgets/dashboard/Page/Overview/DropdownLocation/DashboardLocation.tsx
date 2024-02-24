"use client";

import React from "react";
import DropdownYear from "./DropdownYear";
import DropdownAddress from "./DropdownAddress";

function DashboardLocation() {
  const handleOnchange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  const handleAddress = (value: string) => {
    console.log(value);
  };
  return (
    <div className="absolute z-50 top-0 left-0 w-full flex justify-between items-center bg-[rgba(255,255,255,0.9)] backdrop-blur-sm px-8  py-2">
      <DropdownAddress onChange={(e) => handleAddress(e)} />
      <DropdownYear onChange={(e) => handleOnchange(e)} />
    </div>
  );
}

export default DashboardLocation;
