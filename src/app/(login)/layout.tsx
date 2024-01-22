import React from "react";

function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return <div className="w-screen h-screen">{children}</div>;
}

export default LoginLayout;
