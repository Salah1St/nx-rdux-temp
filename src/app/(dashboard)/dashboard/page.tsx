import DashboardContent from "@widget/dashboard/Page/DashboardContent";
import axios from "axios";

import React from "react";

async function page() {
  return (
    <div className="w-full h-full ">
      <DashboardContent />
    </div>
  );
}

export default page;
