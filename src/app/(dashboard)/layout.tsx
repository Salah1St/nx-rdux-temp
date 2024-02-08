import DashboardContextProvider from "@/context/DashboardContext";
import Dashboard from "@widget/dashboard/layout/Dashboard";

import React from "react";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <DashboardContextProvider>
      <Dashboard>{children}</Dashboard>
    </DashboardContextProvider>
  );
}

export default DashboardLayout;
