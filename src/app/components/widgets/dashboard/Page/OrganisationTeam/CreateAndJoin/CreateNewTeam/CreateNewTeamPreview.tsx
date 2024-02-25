import Image from "next/image";
import React from "react";
import { useCreateNewTeamContext } from "./CreateNewTeamContext";
import SecondaryButton from "@element/primary/SecondaryButton";
import PrimaryButton from "@element/primary/PrimaryButton";
import { useAppSelector } from "@/hooks/useRedux";

function CreateNewTeamPreview() {
  const { previewFile } = useCreateNewTeamContext();
  const dashboardSize = useAppSelector((s) => s.media.dashboardSize);

  return (
    <div className={`w-full ${dashboardSize > 640 ? "px-4" : ""}`}>
      <p className={"text-black text-base "}>Organisation Team Preview</p>
      <div className="border-2 border-slate-200 rounded-xl p-4 flex-col gap-2">
        <div className="h-32 flex justify-center items-center   aspect-square overflow-hidden rounded-xl bg-slate-200">
          {previewFile ? <Image alt="" height={128} width={128} src={previewFile}></Image> : <></>}
        </div>
        <div>
          <h1>Team Name</h1>
          <h3>Type of Government Organisation</h3>
          <p className="text-sm font-light">Area of Responsibility</p>
        </div>
        <div className="w-full justify-start flex gap-2 py-4">
          <PrimaryButton>Join Team</PrimaryButton>
          <SecondaryButton>Invite</SecondaryButton>
        </div>
      </div>
    </div>
  );
}

export default CreateNewTeamPreview;
