import LoginBackground from "@widget/loginPage/LoginBackground";
import LoginForm from "@widget/loginPage/LoginForm";
import React from "react";

function page() {
  return (
    <div className="w-screen h-screen  flex">
      <LoginBackground />
      <LoginForm />
    </div>
  );
}

export default page;
