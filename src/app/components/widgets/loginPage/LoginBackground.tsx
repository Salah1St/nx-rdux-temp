"use client";
import React from "react";
import images from "@/asset/images";
import Image from "next/image";

function LoginBackground() {
  return (
    <>
      <Image width={1000} height={1000} alt="" className="w-1/2  object-left object-cover flex-1" src={images.backgroundLanding.default.src} />
    </>
  );
}

export default LoginBackground;
