"use client";
import icons from "@/asset/icons";
import { Thailand, provinces } from "@/asset/json";
import { useDashboard } from "@/context/DashboardContext";
import { RootState } from "@/redux/store";
import { useClickOutside } from "@/utils/handleClickoutSide";
import Selection, { OptionItem } from "@element/Selection";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";

interface props {}
function CreateAndJoinFilterBar({}: props) {
  const [value, setValue] = useState("All Province");
  const [districtId, setdistrictId] = useState<number | null>(null);
  const [subDistrictId, setSubDistrictId] = useState<number | null>(null);
  const [show, setShow] = useState(false);
  const dashboardSize = useSelector((s: RootState) => s.media.dashboardSize);

  const ref = useClickOutside(() => setShow(false));
  const handleProvince = (target: OptionItem) => {
    setdistrictId(target.id);
  };
  const handleDistrict = (target: OptionItem) => {
    setSubDistrictId(target.id);
  };
  const handleSubDistrict = (target: OptionItem) => {};
  console.log(dashboardSize);
  return (
    <div className=" w-full flex items-center gap-4">
      <Selection data={Thailand.provincesConv} onChange={(e) => handleProvince(e)} placeHolder="All provinces" icon={dashboardSize > 640} />
      <Selection
        data={districtId ? Thailand.districtsConv[districtId] : null}
        onChange={(e) => handleDistrict(e)}
        placeHolder="All district"
        type="chain"
        icon={dashboardSize > 640}
      />
      <Selection
        data={subDistrictId ? Thailand.subdistrictsConv[subDistrictId] : null}
        onChange={(e) => handleSubDistrict(e)}
        placeHolder="All sub-district"
        type="chain"
        icon={dashboardSize > 640}
      />
    </div>
  );
}

export default CreateAndJoinFilterBar;
