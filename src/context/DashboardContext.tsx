"use client";
import { FC, ReactNode, RefObject, createContext, useContext, useEffect, useRef, useState } from "react";

interface DashboardProviderProps {
  children: ReactNode;
}

interface DashboardContext {
  handleToggleLeftSideBar: () => void;
  toggleLeftSideBar: boolean;
  handleToggleRightSideBar: () => void;
  toggleRightSideBar: boolean;
  dashboardRef: RefObject<HTMLDivElement>;
  dashboardSize: number;
}

const DashboardContext = createContext<DashboardContext | null>(null);
const DashboardContextProvider: FC<DashboardProviderProps> = ({ children }) => {
  const [toggleLeftSideBar, setToggleLeftSideBar] = useState(true);
  const [toggleRightSideBar, setToggleRightSideBar] = useState(true);
  const [dashboardSize, setDashboardSize] = useState<number>(0);
  const dashboardRef = useRef<HTMLDivElement>(null);

  function handleToggleLeftSideBar() {
    setToggleLeftSideBar((prev) => !prev);
  }

  function handleToggleRightSideBar() {
    setToggleRightSideBar((prev) => !prev);
  }
  useEffect(() => {
    handleResize();
  }, [toggleRightSideBar, toggleLeftSideBar]);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleResize = async () => {
    await new Promise<number>((res, rej) => {
      setTimeout(() => {
        res(1);
      }, 600);
    });
    if (dashboardRef.current) {
      setDashboardSize(dashboardRef.current.clientWidth);
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        handleToggleLeftSideBar,
        toggleLeftSideBar,
        handleToggleRightSideBar,
        toggleRightSideBar,
        dashboardRef,
        dashboardSize,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardContextProvider");
  }
  return context;
};
export default DashboardContextProvider;
