import CountingRecordComponents from "@widget/dashboard/Page/CountingRecord/CountingRecordComponents";
import DashboardLocation from "@widget/dashboard/Page/DropdownLocation/DashboardLocation";
import CarbonEmissionSummary from "@widget/dashboard/Page/carbonEmissionSummary/CarbonEmissionSummary";

import React from "react";

function page() {
  return (
    <div className="w-full h-fit grid-cols-1  grid gap-4 p-4 ">
      <DashboardLocation />
      <CountingRecordComponents />
      <CarbonEmissionSummary />
    </div>
  );
}

export default page;
