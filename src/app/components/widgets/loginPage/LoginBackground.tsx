"use client";
import React from "react";
import images from "@/asset/images";

function LoginBackground() {
  return (
    <>
      <img className="w-1/2  object-left object-cover flex-1" src={images.backgroundLanding.default.src} />
    </>
  );
}

export default LoginBackground;
