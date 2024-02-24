"use client";
import React from "react";
import CreateNewTeamPreview from "./CreateNewTeamPreview";
import CreateNewTeamForm from "./CreateNewTeamForm";
import { useAppSelector } from "@/hooks/useRedux";

function CreateNewTeamContent() {
  const dashboardSize = useAppSelector((s) => s.media.dashboardSize);
  return (
    <div className="relative w-full h-full  px-8">
      <h1 className="font-bold py-8">Create New Organisation Team</h1>
      <div className={` grid w-full h-full  ${dashboardSize > 640 ? "grid-cols-2" : "grid-cols-1"}`}>
        <CreateNewTeamForm />
        <CreateNewTeamPreview />
      </div>
    </div>
  );
}

export default CreateNewTeamContent;
