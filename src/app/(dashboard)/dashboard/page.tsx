import CountingRecordComponents from "@widget/dashboard/Page/CountingRecord/CountingRecordComponents";
import DashboardLocation from "@widget/dashboard/Page/DropdownLocation/DashboardLocation";
import React from "react";

function page() {
  return (
    <div className="w-full h-full p-4 ">
      <DashboardLocation />
      <CountingRecordComponents />
    </div>
  );
}

export default page;
