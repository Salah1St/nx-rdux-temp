"use client";

import DropdownAddress from "@widget/dashboard/Page/DropdownLocation/DropdownAddress";
import DropdownYear from "@widget/dashboard/Page/DropdownLocation/DropdownYear";

const handleYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
  e.preventDefault();
  console.log(e.target.value);
};

const handleAddress = (value: string) => {
  console.log(value);
};

function HouseholdListLocation() {
  return (
    <div className="w-full h-10  flex justify-between items-center bg-[rgba(255,255,255,0.9)] backdrop-blur-sm ">
      <DropdownAddress onChange={(e) => handleAddress(e)} />
      <DropdownYear onChange={(e) => handleYear(e)} />
    </div>
  );
}

export default HouseholdListLocation;
