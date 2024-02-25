import Redirect from "@element/Redirect";
import React from "react";

function page() {
  return (
    <div>
      <Redirect url="/dashboard/overview" />
    </div>
  );
}

export default page;
