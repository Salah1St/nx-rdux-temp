"use client";
import images from "@/asset/images";
import { getAccessToken } from "@/utils/localStroage";
import LoginBackground from "@widget/loginPage/LoginBackground";
import FormLogin from "@widget/loginPage/loginForm/FormLogin";
import { Axios, AxiosResponse } from "axios";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import { setTimeout } from "timers";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      const token = getAccessToken();
      router.replace(!token ? "./dashboard" : "./login");
    }, 3000);
  }, [router]);
  https: return (
    <div className="w-screen h-screen  flex">
      <Image width={1000} height={1000} alt="" className="w-1/2 animate-fade-slow  object-left object-cover flex-1" src={images.backgroundLanding.default.src} />
      <div className=" h-full bg-slate-50 flex-1 flex justify-center items-center">
        <div className=" animate-fade-in   border border-slate-200 shadow-md w-[400px] h-[400px] rounded-lg flex flex-col gap-4 justify-center p-8">
          <FormLogin className="" />
        </div>
      </div>
    </div>
  );
}
