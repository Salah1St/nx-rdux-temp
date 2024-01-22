"use client";
import React from "react";

import { FieldValues, FormState, Path, UseFormRegister } from "react-hook-form";

interface props<TFieldValues extends FieldValues> {
  id: Path<TFieldValues>;
  title: string;
  placeHolder?: string;
  classNameTitle?: string;
  classNameInput?: string;
  register?: UseFormRegister<TFieldValues>;
  formState?: FormState<TFieldValues>;
  data: Option[];
  defaultValue?: string;
}

interface Option {
  name: string;
  value: string;
}

function SelectOption<TFieldValues extends FieldValues>(props: props<TFieldValues>) {
  const { title, placeHolder, classNameTitle, classNameInput, register, id, defaultValue = "", data = [] } = props;

  return (
    <div className="flex flex-col gap-2 pb-4">
      <p className={classNameTitle ? classNameTitle : "text-black text-base heading-xxs"}>{title}</p>

      <select id={id} {...register?.(id)} defaultValue={defaultValue} className={classNameInput ? classNameInput : `w-full h-12 rounded-xl px-5 content-s border`}>
        <option disabled value="">
          {placeHolder}
        </option>
        {data?.map((item: Option, id: number) => {
          return (
            <option key={id} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectOption;
