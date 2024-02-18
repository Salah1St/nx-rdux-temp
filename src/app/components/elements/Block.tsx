import { Skeleton } from "@/components/ui/skeleton";
import { useDashboard } from "@/context/DashboardContext";
import React from "react";
interface props {
  children: JSX.Element | JSX.Element[];
  ratio: "20%" | "30%" | "40%" | "50%" | "60%" | "70%" | "80%" | "100%";
}
function Block({ ratio, children }: props) {
  const { dashboardSize } = useDashboard();
  const amount = Array.isArray(children) ? children.length : 1;
  let ratioClass = "grid-cols-1";
  switch (ratio) {
    case "20%":
      ratioClass = "grid-cols-20%";
      break;
    case "30%":
      ratioClass = "grid-cols-30%";
      break;
    case "40%":
      ratioClass = "grid-cols-40%";
      break;
    case "50%":
      ratioClass = "grid-cols-50%";
      break;
    case "60%":
      ratioClass = "grid-cols-60%";
      break;
    case "70%":
      ratioClass = "grid-cols-70%";
      break;
    case "80%":
      ratioClass = "grid-cols-80%";
      break;
    default:
      ratioClass = "grid-cols-1";
      break;
  }

  return (
    <div
      className={`relative w-full grid gap-4  overflow-hidden min-h-[300px]  ${
        dashboardSize > 640 ? `h-[300px]  ${ratioClass}` : `h-[${300 * amount}px] grid-cols-1 grid-rows-${amount}`
      }`}
    >
      {children}
      {!dashboardSize && (
        <div className={`absolute top-0 left-0 h-full  w-full overflow-hidden z-50 bg-slate-50`}>
          <Skeleton className="w-full rounded-2xl" />
        </div>
      )}
    </div>
  );
}

export default Block;
