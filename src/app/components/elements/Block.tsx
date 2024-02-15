import { Skeleton } from "@/components/ui/skeleton";
import { useDashboard } from "@/context/DashboardContext";
import React from "react";
interface props {
  children: JSX.Element | JSX.Element[];
  ratio: "20%" | "30%" | "40%" | "50%" | "60%" | "70%" | "80%" | "100%";
}
function Block({ ratio, children }: props) {
  const { dashboardSize } = useDashboard();

  return dashboardSize ? (
    <div className={`w-full min-h-[300px] grid gap-4  ${ratio === "100%" || dashboardSize < 640 ? "grid-cols-1" : ` grid-cols-[50%_1fr] `}   my-4 `}>{children}</div>
  ) : (
    <div className={`w-full min-h-[300px] grid gap-4   ${ratio === "100%" ? "grid-cols-1" : `grid-cols-[${ratio}_1fr]`}  my-4 `}>
      {Array.isArray(children) ? children.map((i, d) => <Skeleton key={d} className="w-full rounded-2xl" />) : <Skeleton className="w-full rounded-2xl" />}
    </div>
  );
}

export default Block;
