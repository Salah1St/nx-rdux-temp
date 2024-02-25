"use client";
import React from "react";
import CreateNewTeamPreview from "./CreateNewTeamPreview";
import CreateNewTeamForm from "./CreateNewTeamForm";
import { useAppSelector } from "@/hooks/useRedux";
import CreateNewTeamProvider from "./CreateNewTeamContext";

function CreateNewTeamContent() {
  const dashboardSize = useAppSelector((s) => s.media.dashboardSize);
  return (
    <div className="relative w-full h-full flex flex-col  px-8">
      <h1 className="font-bold py-8">Create New Organisation Team</h1>
      <div className="w-full h-10 grow overflow-y-scroll  no-scrollbar ">
        <div className={` grid w-full h-full  ${dashboardSize > 640 ? "grid-cols-2" : "grid-cols-1"}`}>
          <CreateNewTeamProvider>
            <CreateNewTeamForm />
            <CreateNewTeamPreview />
          </CreateNewTeamProvider>
        </div>
      </div>
    </div>
  );
}

export default CreateNewTeamContent;
