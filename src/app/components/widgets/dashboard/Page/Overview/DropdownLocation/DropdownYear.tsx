"use client";

import React from "react";

interface props {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
function DropdownYear({ onChange }: props) {
  const now = new Date().getFullYear();
  const Option = new Array(5).fill(0).map((i, d) => now - d);

  const handleOnchange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    onChange(e);
  };
  return (
    <div className=" h-full flex items-center ">
      <select defaultValue={now} className="w-fit bg-transparent  border-[1px] border-slate-300 rounded-md  " onChange={(e) => handleOnchange(e)}>
        {Option.map((i) => (
          <option key={i} value={i}>
            {i === now ? "this year" : i}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownYear;
