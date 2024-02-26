"use client";
import icons from "@/asset/icons";
import LinkButtonDropdown from "@element/primary/LinkButtonDropdown";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboards() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const handleClick = () => {
    if (!pathname.includes(`/dashboard/overview`)) {
      setShow(true);
    }
  };

  useEffect(() => {
    if (!pathname.includes(`/dashboard/overview`)) {
      setShow(false);
    }
  }, [pathname]);
  const path = "/dashboard/overview";
  const title = "Overview";
  return <LinkButtonDropdown path={path} title={title} />;
}
