"use client";

import icons from "@/asset/icons";
import images from "@/asset/images";
import { getAccessToken } from "@/utils/localStroage";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const handleJoinUs = () => {
    const token = getAccessToken();
    router.push(!token ? "/dashboard/overview" : "/login");
  };
  https: return (
    <div className="relative w-screen min-h-screen overflow-y-scroll   ">
      <div className="w-screen h-screen relative  bg-fixed  bg-cover " style={{ backgroundImage: `url(${images.forest.default.src})`, backgroundPosition: "right center" }}>
        <Image
          alt="mask"
          src={images.landingpageMask.default.src}
          quality={100}
          sizes="100vw"
          width={1000}
          height={1000}
          className="absolute top-0 right-0 z-10 w-full h-full  object-cover object-top"
        />
        <div className="absolute top-0 right-0  w-full h-full flex z-20 font-Comfortaa">
          <div className="h-full flex-1 flex justify-center items-center">
            <div className="w-[500px] h-[500px] text-white grid grid-rows-5 text-6xl">
              <div>Carbon</div>
              <div>Credit Bureau</div>
              <div>Thailand</div>
              <div className="w-full h-1 bg-white"></div>
              <div className="w-full h-full flex justify-start items-center">
                <button
                  role="button"
                  className="border-4 border-primary-brand-400 rounded-3xl shadow-lg shadow-primary-brand-600 active:shadow-inner active:scale-95 active:text-primary-brand-400 px-16 py-8"
                  onClick={handleJoinUs}
                >
                  Join Us
                </button>
              </div>
            </div>
          </div>

          <div className="h-full flex-1" />
        </div>
      </div>
      <div className="relative w-screen h-screen   bg-fixed  bg-cover" style={{ backgroundImage: `url(${images.forest.default.src})`, backgroundPosition: "right center" }}>
        <Image
          alt="mask"
          src={images.landingpageMask2.default.src}
          quality={100}
          sizes="100vw"
          width={1000}
          height={1000}
          className="absolute top-0 right-0 z-10 w-full h-full  object-cover object-top"
        />
        <div className="absolute top-0 right-0  w-full h-full flex z-20 font-Comfortaa">
          <div className="h-full flex-1 flex flex-col justify-start px-16 py-32 gap-16">
            <div className="text-black text-5xl">About CCB</div>
            <div className="w-full h-fit flex flex-col   gap-4 ">
              <div className="text-4xl text-primary-brand-400">Company Positioning</div>
              <div className="grow ">
                <p>
                  {
                    "To align with the government's commitment to the Net Zero trend, Carbon Credit Bureau Thailand (CCB) offers an innovative solution for government organizations."
                  }
                </p>
                <p>{"Our system facilitates the tracking, analysis, and reporting processes, contributing to the reduction of carbon footprint in Thailand. "}</p>
                <p>{"This is achieved through the collection, calculation, and visualization of carbon footprint data at the household level."}</p>
              </div>
            </div>
            <div className="w-full h-fit flex flex-col   gap-4 ">
              <div className="text-4xl text-primary-brand-400 ">Company Purpose</div>
              <div className="flex flex-col gap-4">
                {
                  "Incorporate carbon considerations into our everyday lives to support and assist individuals, fostering societal integration into an ecosystem aligned with the netzero trend."
                }
              </div>
            </div>
          </div>

          <div className="h-full flex-1" />
        </div>
      </div>
      <div className="relative w-screen h-screen   bg-fixed  bg-cover" style={{ backgroundImage: `url(${images.forest.default.src})`, backgroundPosition: "right center" }}>
        <Image
          alt="mask"
          src={images.landingpageMask3.default.src}
          quality={100}
          sizes="100vw"
          width={1000}
          height={1000}
          className="absolute top-0 right-0 z-10 w-full h-full  object-cover object-top"
        />
        <Image
          alt="mask"
          src={images.frameMask3.default.src}
          quality={100}
          sizes="100vw"
          width={1000}
          height={1000}
          className="absolute top-0 right-0 z-10 w-full h-full  object-cover object-top"
        />
      </div>
      <div
        className="relative w-screen h-[50vh]   bg-fixed  bg-cover"
        style={{ backgroundImage: `url(${images.landingpageBackground4.default.src})`, backgroundPosition: "right center" }}
      ></div>
      <div className="relative w-screen h-screen   bg-fixed  bg-cover" style={{ backgroundImage: `url(${images.forest.default.src})`, backgroundPosition: "right center" }}>
        <Image
          alt="mask"
          src={images.landingpageMask4.default.src}
          quality={100}
          sizes="100vw"
          width={1000}
          height={1000}
          className="absolute top-0 right-0 z-10 w-full h-full  object-cover object-top"
        />
      </div>
      <div
        className="relative w-screen h-screen   bg-fixed  bg-cover"
        style={{ backgroundImage: `url(${images.landingpageBackground5.default.src})`, backgroundPosition: "right center" }}
      >
        <Image
          alt="mask"
          src={images.landingpageMask2.default.src}
          quality={100}
          sizes="100vw"
          width={1000}
          height={1000}
          className="absolute top-0 right-0 z-10 w-full h-full  object-cover object-top"
        />
      </div>
      <div
        className="relative w-screen h-screen bg-fixed  bg-cover"
        style={{ backgroundImage: `url(${images.landingpageBackground5.default.src})`, backgroundPosition: "right center" }}
      >
        <Image
          alt="mask"
          src={images.landingpageMask.default.src}
          quality={100}
          sizes="100vw"
          width={1000}
          height={1000}
          className="absolute top-0 right-0 z-10 w-full h-full  object-cover object-top"
        />
      </div>
      <div className="animate-fade-display  fixed top-0 left-0 z-50 w-screen h-screen  flex justify-center items-center bg-slate-900">
        <Image className="animate-heart " width={128} height={128} alt="" src={icons.Ccb} />
      </div>
    </div>
  );
}
