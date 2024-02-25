"use client";
import { DropdownItem } from "@/asset/json";
import { useLocalization } from "@/hooks/useLocalization";
import React, { useEffect, useState } from "react";

import { FieldValues, FormState, Path, UseFormRegister } from "react-hook-form";

interface props<TFieldValues extends FieldValues> {
  id: Path<TFieldValues>[];
  title: string;
  placeHolder: string[];
  register?: UseFormRegister<TFieldValues>;
  formState?: FormState<TFieldValues>;
  data: Option[];
  chainData?: ChainOption[];
  isRequire?: boolean;
}

export interface ChainOption extends Record<string, Option[]> {}
export interface Option extends DropdownItem {}

function SelectAreaResponsibility<TFieldValues extends FieldValues>(props: props<TFieldValues>) {
  const { title, placeHolder, register, id, data = [], chainData = [], formState, isRequire } = props;
  const { t } = useLocalization();
  const [value, setValue] = useState<Record<string, string>>({});

  const overWriteOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    register?.(e.target.id as Path<TFieldValues>).onChange(e);
    setValue((p) => ({ ...p, [e.target.id as string]: e.target.value }));
  };
  return (
    <div className="flex flex-col gap-2 pb-4">
      <p className={"text-black text-base "}>
        {title} {isRequire ? <span className=" text-primary-error-400">{" *"}</span> : ""}
      </p>
      <label htmlFor={id[0]} className={`w-full h-12 rounded-md bg-slate-100 border   px-2 ${formState?.errors[id[0]] ? "border-red-500" : "border-transparent"}`}>
        <select
          id={id[0]}
          {...register?.(id[0])}
          onChange={(e) => overWriteOnChange(e)}
          defaultValue={""}
          className={`w-full h-full bg-slate-100 outline-none border-none cursor-pointer ${value[id[0] as string] === "" ? "text-slate-400" : "text-black"}`}
        >
          <option disabled value="">
            {placeHolder[0]}
          </option>
          {data?.map((item: Option, id: number) => {
            return (
              <option key={id} value={item.id}>
                {item[t("enum.select") as keyof DropdownItem] as string}
              </option>
            );
          })}
        </select>
      </label>
      {Object.keys(value).length > 0 &&
        chainData.slice(0, Object.keys(value).length).map((i, d) => (
          <label key={d} htmlFor={id[d + 1]} className="w-full h-12 rounded-md bg-slate-100  px-2">
            <select
              id={id[d + 1]}
              {...register?.(id[d + 1])}
              onChange={(e) => overWriteOnChange(e)}
              defaultValue={"-1"}
              className={`w-full h-full bg-slate-100 outline-none border-none cursor-pointer ${value[id[d + 1] as string] === "-1" ? "text-slate-400" : "text-black"}`}
            >
              <option disabled value="-1">
                {placeHolder[d + 1]}
              </option>
              {chainData[d][value[id[d]]]?.map((item: Option, id: number) => {
                return (
                  <option key={id} value={item.id}>
                    {item[t("enum.select") as keyof DropdownItem] as string}
                  </option>
                );
              })}
            </select>
          </label>
        ))}
    </div>
  );
}

export default SelectAreaResponsibility;
