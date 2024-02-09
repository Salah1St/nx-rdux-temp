"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData, ChartOptions, Plugin, DatasetChartOptions, ElementChartOptions } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// interface Props {
//   data: ChartData<"doughnut", number[] | undefined, unknown>;
//   text?: string;
//   options?: ChartOptions<"doughnut">;
// }

interface Props {
  data: { type: string; amount: number }[];
  text?: string;
}

export default function DoughnutChart({ data, text }: Props) {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const config: ChartData<"doughnut", number[], unknown> = {
    datasets: [
      {
        data: data?.map((item) => item.amount),
        backgroundColor: ["#27462C", "#56915D", "#B9D4B9"],
        hoverOffset: 4,
        offset: -20,
        rotation: 30,
        borderWidth: 4,
        borderRadius: { innerStart: 100, outerStart: 100 },
        borderJoinStyle: "round",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%",
    animation: { animateRotate: true },
  };

  const textCenter: Plugin<"doughnut"> = {
    id: "textCenter",

    beforeDatasetsDraw(chart) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = "bolder 15px sans-serif";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text || "", chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
    },
  };

  return <Doughnut data={config} options={options} plugins={[textCenter]} />;
}
