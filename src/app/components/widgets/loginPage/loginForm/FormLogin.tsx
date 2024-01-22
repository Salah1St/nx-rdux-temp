"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLocalization } from "@/hooks/useLocalization";

import { useDispatch } from "react-redux";
import { login } from "@/redux/slice/authSlice";
import InputText from "@element/InputText";
import ModalComponents from "@element/ModalComponents";

interface FormValues {
  username: string;
  password: string;
}
function FormLogin({ className }: { className?: string }) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().required("This field is required"),
    password: yup.string().required("This field is required"),
  });
  const hookForm = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
    } catch (error) {}
  };

  const fotgetBtn = (
    <p role="button" className=" text-white  active:text-info text-xs underline  ">
      {"forgot"}
    </p>
  );
  return (
    <form className={`w-full flex flex-col gap-8  select-none ${className}`} onSubmit={hookForm.handleSubmit(onSubmit)}>
      <h3>Sign in</h3>
      <div className="flex flex-col gap-4">
        <InputText id="username" title={"username"} placeHolder={"username"} {...hookForm} />
        <InputText id="password" type="password" title={"password"} placeHolder={"password"} {...hookForm} />
        <div className="flex justify-end ">
          <ModalComponents show={show} setShow={setShow} button={fotgetBtn}></ModalComponents>
        </div>
      </div>
      <button type="button">{"Next"}</button>
    </form>
  );
}

export default FormLogin;
