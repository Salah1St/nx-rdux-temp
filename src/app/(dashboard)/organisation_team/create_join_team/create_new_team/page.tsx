import CreateAndJoinContent from "@widget/dashboard/Page/OrganisationTeam/CreateAndJoin/CreateAndJoinContent";
import CreateNewTeamContent from "@widget/dashboard/Page/OrganisationTeam/CreateAndJoin/CreateNewTeam/CreateNewTeamContent";
import DashboardContent from "@widget/dashboard/Page/Overview/DashboardContent";
import React from "react";

async function page() {
  return (
    <div className="w-full h-full ">
      <CreateNewTeamContent />
    </div>
  );
}

export default page;
