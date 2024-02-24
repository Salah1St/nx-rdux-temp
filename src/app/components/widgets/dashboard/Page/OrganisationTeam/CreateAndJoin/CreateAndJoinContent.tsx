import React from "react";
import CreateAndJoinSearchBar from "./CreateAndJoinSearchBar";
import CreateAndJoinFilterBar from "./CreateAndJoinFilterBar";
import CreateAndJoinGroup from "./CreateAndJoinGroup";

function CreateAndJoinContent() {
  return (
    <div className="relative w-full h-full flex flex-col px-8 ">
      <CreateAndJoinSearchBar />
      <CreateAndJoinFilterBar />
      <CreateAndJoinGroup />
    </div>
  );
}

export default CreateAndJoinContent;
