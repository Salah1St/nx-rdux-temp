import React from "react";

function CountingRecordComponents() {
  return (
    <div className="w-full h-[150px] grid grid-cols-3 gap-8  px-4">
      <Record />
      <Record />
      <Record />
    </div>
  );
}

function Record() {
  return (
    <div className="bg-primary-brand-100 rounded-2xl grid grid-rows-2 items-center px-8 py-4">
      <div className="flex">
        <div className="text-xl font-bold">Carbon Footprint</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-[32px] font-bold">721K</div>
        <div>+110%</div>
      </div>
    </div>
  );
}

export default CountingRecordComponents;
