"use client";
import { Thailand, provinces } from "@/asset/json";
import { useAppSelector } from "@/hooks/useRedux";
import { useClickOutside } from "@/utils/handleClickoutSide";
import Selection, { OptionItem } from "@element/Selection";
import React, { useState } from "react";

interface props {}
function CreateAndJoinFilterBar({}: props) {
  const [districtId, setdistrictId] = useState<number | null>(null);
  const [subDistrictId, setSubDistrictId] = useState<number | null>(null);
  const [show, setShow] = useState(false);
  const dashboardSize = useAppSelector((s) => s.media.dashboardSize);

  const ref = useClickOutside(() => setShow(false));
  const handleProvince = (target: OptionItem) => {
    setdistrictId(target.id);
  };
  const handleDistrict = (target: OptionItem) => {
    setSubDistrictId(target.id);
  };
  const handleSubDistrict = (target: OptionItem) => {};

  return (
    <div className=" w-full flex items-center gap-4">
      <Selection data={Thailand.provincesConv} onChange={(e) => handleProvince(e)} placeHolder="select provinces" icon={dashboardSize > 640} />
      <Selection
        data={districtId ? Thailand.districtsConv[districtId] : null}
        onChange={(e) => handleDistrict(e)}
        placeHolder="select district"
        type="chain"
        icon={dashboardSize > 640}
      />
      <Selection
        data={subDistrictId ? Thailand.subdistrictsConv[subDistrictId] : null}
        onChange={(e) => handleSubDistrict(e)}
        placeHolder="select sub-district"
        type="chain"
        icon={dashboardSize > 640}
      />
    </div>
  );
}

export default CreateAndJoinFilterBar;
