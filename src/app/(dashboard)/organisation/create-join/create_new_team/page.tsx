import CreateAndJoinContent from "@widget/dashboard/Page/OrganisationTeam/CreateAndJoin/CreateAndJoinContent";
import DashboardContent from "@widget/dashboard/Page/Overview/DashboardContent";
import React from "react";

async function page() {
  return (
    <div className="w-full h-full ">
      <CreateAndJoinContent />
    </div>
  );
}

export default page;
