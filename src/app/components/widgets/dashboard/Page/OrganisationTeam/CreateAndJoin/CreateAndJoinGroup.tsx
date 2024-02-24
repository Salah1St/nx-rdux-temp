import React from "react";

function CreateAndJoinGroup() {
  const group = new Array(10).fill(0).map((i, d) => d);
  return (
    <div className="w-full h-10 grow overflow-y-scroll  no-scrollbar  py-2">
      {group.map((i, d) => (
        <TeamCard key={d} />
      ))}
    </div>
  );
}

export default CreateAndJoinGroup;

function TeamCard() {
  return (
    <div className="w-full h-32  border-b-2 border-slate-200  flex justify-between items-center px-2 py-4 ">
      <div className="w-full h-full flex items-center gap-4">
        <div className="h-full aspect-square rounded-full bg-slate-200"></div>
        <div className="flex flex-col">
          <div>Huai Pha SAO, Nakhon Phanom</div>
          <div>Subdistrict Administrative Organisation</div>
          <div>Nonthaburi, Don Tum, Huai Pha</div>
        </div>
      </div>
      <div className=" flex justify-center items-center gap-2 py-4">
        <button className="text-primary-brand-400 whitespace-nowrap rounded-lg bg-primary-brand-200 px-4 py-2" type="button">
          Invite
        </button>
        <button className="text-white whitespace-nowrap rounded-lg bg-primary-brand-400 px-4 py-2" type="button">
          Join Team
        </button>
      </div>
    </div>
  );
}
