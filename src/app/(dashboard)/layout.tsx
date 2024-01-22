import React from "react";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return <div>{children}</div>;
}

export default DashboardLayout;
