"use client";
import { useAppDispatch } from "@/hooks/useRedux";
import { ChartdataSrcs, LineChartdataSrcs } from "@/model/interface";
import { setDashboardSize } from "@/redux/slice/mediaSlice";
import axios from "axios";
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
  carbonDonut: ChartdataSrcs[];
  emissionFactor: ChartdataSrcs[];
  carbonCredit: ChartdataSrcs[];
  carbonCreditLine: LineChartdataSrcs[];
}

const DashboardContext = createContext<DashboardContext | null>(null);
const DashboardContextProvider: FC<DashboardProviderProps> = ({ children }) => {
  const [toggleLeftSideBar, setToggleLeftSideBar] = useState(true);
  const [toggleRightSideBar, setToggleRightSideBar] = useState(true);

  const [carbonDonut, setCarbonDonut] = useState<ChartdataSrcs[]>([]);
  const [emissionFactor, setEmissionFactor] = useState<ChartdataSrcs[]>([]);
  const [carbonCredit, setCarbonCredit] = useState<ChartdataSrcs[]>([]);
  const [carbonCreditLine, setCarbonCreditLine] = useState<LineChartdataSrcs[]>([]);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  function handleToggleLeftSideBar() {
    setToggleLeftSideBar((prev) => !prev);
  }

  function handleToggleRightSideBar() {
    setToggleRightSideBar((prev) => !prev);
  }
  const handleResize = async () => {
    await new Promise<number>((res, rej) => {
      setTimeout(() => {
        res(1);
      }, 600);
    });
    if (dashboardRef.current) {
      dispatch(setDashboardSize(dashboardRef.current.clientWidth));
    }
  };
  async function fetchDashboardDate() {
    const mock = await axios.get(String(process.env.INNER_API_URL) + "/api/mock");
    setCarbonDonut(mock.data.carbonDonut);
    setEmissionFactor(mock.data.emissionFactor);
    setCarbonCredit(mock.data.carbonCredit);
    setCarbonCreditLine(mock.data.carbonCreditLine);
  }

  useEffect(() => {
    handleResize();
  }, [toggleRightSideBar, toggleLeftSideBar]);
  useEffect(() => {
    fetchDashboardDate();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <DashboardContext.Provider
      value={{
        handleToggleLeftSideBar,
        toggleLeftSideBar,
        handleToggleRightSideBar,
        toggleRightSideBar,
        dashboardRef,
        emissionFactor,
        carbonCredit,
        carbonCreditLine,
        carbonDonut,
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
