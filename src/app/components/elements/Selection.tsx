"use client";
import React, { useEffect, useRef, useState } from "react";
import icons from "@/asset/icons";
import { useClickOutside } from "@/utils/handleClickoutSide";
import Image from "next/image";
import { useLocalization } from "@/hooks/useLocalization";

export interface OptionItem {
  id: number;
  valueEn: string;
  valueTh: string;
}
interface props {
  onChange: (target: OptionItem) => void;
  placeHolder: string;
  data: OptionItem[] | null;
  type?: "src" | "chain";
}

function Selection({ onChange, placeHolder, data, type = "src" }: props) {
  const { t } = useLocalization();
  const [value, setValue] = useState(placeHolder);
  const [show, setShow] = useState(false);
  const ref = useClickOutside(() => setShow(false));
  const [width, setWidth] = useState(0);
  const div1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (div1Ref.current) {
        setWidth(div1Ref.current.offsetWidth);
      }
    };
    updateWidth();
  }, [div1Ref.current?.offsetWidth]);
  const handleOnClick = (index: number) => {
    if (data) {
      const target = data[index];
      setValue(target[t("enum.select") as keyof OptionItem] as string);
      onChange(target);
    }
  };

  return (
    <div ref={ref} className=" relative w-[${width}px]  px-4" onClick={(e) => setShow((p) => !p)}>
      <div className={` flex justify-between gap-4  items-center ${data ? "hover:drop-shadow-primary cursor-pointer " : " text-slate-200"}  `}>
        {value}
        <div className="p-1 aspect-square flex justify-center items-center rounded-full ">
          <Image src={icons.downVector} width={16} alt="" />
        </div>
      </div>
      {show && data && (
        <div
          ref={div1Ref}
          className="absolute top-10 bg-[rgba(96,145,100,0.1)] shadow-md shadow-primary-brand-900 flex flex-col  max-h-[300px] overflow-y-scroll backdrop-blur-md  border border-primary-brand-400  rounded-lg "
        >
          {data.map((i, d) => (
            <div className="whitespace-nowrap text-white  drop-shadow-text  hover:shadow-md  px-2 cursor-pointer" key={d} onClick={(e) => handleOnClick(d)}>
              {i[t("enum.select") as keyof OptionItem]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Selection;
