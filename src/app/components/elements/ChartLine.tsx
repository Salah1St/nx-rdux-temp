"use client";

import { primaryColor } from "@widget/dashboard/Page/DashboardData/constant/color";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Point, ChartData } from "chart.js";
import { Line } from "react-chartjs-2";

interface Props {
  CurrentData: number[];
  CompareData: number[];
}

export default function ChartLine({ CurrentData, CompareData }: Props) {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const labels = new Array(5)
    .fill(1)
    .map((i, d) => new Date().getFullYear() - d)
    .reverse();

  const data: ChartData<"line", (number | Point | null)[], unknown> = {
    labels,
    datasets: [
      {
        label: "CurrentData",
        data: CurrentData,
        borderColor: primaryColor[0],
      },
      {
        label: "CompareData",
        data: CompareData,
        borderColor: primaryColor[1],
      },
    ],
  };
  const options = {
    responsive: true,
    scales: { x: { grid: { display: false } }, y: { ticks: { callback: (v: string | number) => +v / 1e6 + "M" } } },
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Carbon credit",
        font: { size: 20 },
        padding: 20,
      },
    },
  };

  return <Line options={options} data={data} />;
}

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top" as const,
//     },
//     title: {
//       display: true,
//       text: "Chart.js Line Chart",
//     },
//   },
// };

// export function App() {
//   return <Line options={options} data={data} />;
// }
