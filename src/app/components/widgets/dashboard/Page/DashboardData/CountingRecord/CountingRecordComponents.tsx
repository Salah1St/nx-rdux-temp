import React from "react";

function CountingRecordComponents() {
  return (
    <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Record />
      <Record />
      <Record />
    </div>
  );
}

function Record() {
  return (
    <div className=" h-[120px] sm:h-[150px]  bg-primary-brand-100 rounded-2xl grid grid-rows-2 items-center px-4 md:px-8 py-4">
      <div className="flex">
        <div className="text-base md:text-xl font-bold whitespace-nowrap">Carbon Footprint</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-2xl md:text-[32px] font-bold">721K</div>
        <div>+110%</div>
      </div>
    </div>
  );
}

export default CountingRecordComponents;
