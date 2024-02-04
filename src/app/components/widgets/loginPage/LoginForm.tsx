import React from "react";
import FormLogin from "./loginForm/FormLogin";

function LoginForm() {
  return (
    <div className=" h-full bg-slate-50 flex-1 flex justify-center items-center">
      <div className="  border border-slate-200 shadow-md w-[400px] h-[400px] rounded-lg flex flex-col gap-4 justify-center p-8">
        <FormLogin />
        <div className="text-base">test</div>
      </div>
    </div>
  );
}
export default LoginForm;
