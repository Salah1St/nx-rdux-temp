"use client";
import icons from "@/asset/icons";
import { Thailand, provinces } from "@/asset/json";
import { useClickOutside } from "@/utils/handleClickoutSide";
import Selection, { OptionItem } from "@element/Selection";
import Image from "next/image";
import React, { useState } from "react";

interface props {
  onChange: (value: string) => void;
}
function DropdownAddress({ onChange }: props) {
  const [value, setValue] = useState("All Province");
  const [districtId, setdistrictId] = useState<number | null>(null);
  const [subDistrictId, setSubDistrictId] = useState<number | null>(null);
  const [show, setShow] = useState(false);
  const ref = useClickOutside(() => setShow(false));
  const handleProvince = (target: OptionItem) => {
    setdistrictId(target.id);
  };
  const handleDistrict = (target: OptionItem) => {
    setSubDistrictId(target.id);
  };
  const handleSubDistrict = (target: OptionItem) => {};

  return (
    <div className="sticky top-0 w-full h-full flex items-center gap-4">
      <Selection data={Thailand.provincesConv} onChange={(e) => handleProvince(e)} placeHolder="All provinces" />
      <Selection data={districtId ? Thailand.districtsConv[districtId] : null} onChange={(e) => handleDistrict(e)} placeHolder="All district" type="chain" />
      <Selection data={subDistrictId ? Thailand.subdistrictsConv[subDistrictId] : null} onChange={(e) => handleSubDistrict(e)} placeHolder="All sub-district" type="chain" />
    </div>
  );
}

export default DropdownAddress;
