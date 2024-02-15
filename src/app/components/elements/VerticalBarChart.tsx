"use client";

import { primaryColor } from "@widget/dashboard/Page/DashboardData/constant/color";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartData } from "chart.js";
import { Bar } from "react-chartjs-2";

interface Props {
  rawData: number[];
}

export default function VerticalBarChart({ rawData }: Props) {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  const labels = new Array(5)
    .fill(1)
    .map((i, d) => new Date().getFullYear() - d)
    .reverse();

  const data: ChartData<"bar", (number | [number, number] | null)[], unknown> = {
    labels,
    datasets: [
      {
        label: "Carbon credit",
        data: rawData,
        backgroundColor: primaryColor.slice(0, labels.length),
        barPercentage: 0.4,
        borderRadius: 4,
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

  return <Bar options={options} data={data} />;
}
