import React, { ReactNode } from "react";

interface props {
  id?: string;
  form?: string;
  children: string | ReactNode;
  className?: string;
  type?: "submit" | "button" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
function PrimaryButton({ id, className, children, type = "button", form, onClick }: props) {
  const defaultButtone = "";
  return (
    <button
      id={id}
      className={className ? className : "w-full h-full flex justify-center items-center bg-primary-brand-400 text-white p-2 rounded-md"}
      type={type}
      form={form}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
