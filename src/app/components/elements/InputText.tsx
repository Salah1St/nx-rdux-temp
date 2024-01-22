"use client";
import React from "react";

import { FieldValues, FormState, Path, UseFormRegister } from "react-hook-form";

interface props<TFieldValues extends FieldValues> {
  id: Path<TFieldValues>;
  title: string;
  placeHolder?: string;
  classNameTitle?: string;
  classNameInput?: string;
  type?: "text" | "password";
  register?: UseFormRegister<TFieldValues>;
  formState?: FormState<TFieldValues>;
}

function InputText<TFieldValues extends FieldValues>(props: props<TFieldValues>) {
  const { title, placeHolder, classNameTitle, classNameInput, type = "text", register, formState, id } = props;

  //   =====================================> Render JSX <=====================================
  return (
    <div className="relative flex flex-col gap-2 pb-4">
      <p className={classNameTitle ? classNameTitle : "text-black text-base heading-xxs"}>{title}</p>
      <input
        id={id}
        {...register?.(id)}
        type={type}
        className={`w-full h-12 rounded-xl px-5 content-s ${formState?.errors?.[id] ? "border border-error" : ""} ${
          classNameInput ? classNameInput : ""
        }`}
        placeholder={placeHolder ? placeHolder : ""}
      />

      <p
        className={`absolute bottom-0 h-4 ml-4 px-2 text-error text-xs font-extralight bg-white rounded-b-xl rounded-tr-xl  ${
          formState?.errors?.[id] ? "fade_visible border border-error border-t-0" : "invisible"
        }`}
      >
        {`${formState?.errors?.[id]?.message ?? " "}`}
      </p>
    </div>
  );
}

export default InputText;
