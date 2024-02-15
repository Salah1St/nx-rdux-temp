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
    <div className="w-full h-fit  flex justify-between items-center ">
      <DropdownAddress onChange={(e) => handleAddress(e)} />
      <DropdownYear onChange={(e) => handleOnchange(e)} />
    </div>
  );
}

export default DashboardLocation;
