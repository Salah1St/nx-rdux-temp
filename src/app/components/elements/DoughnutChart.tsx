"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData, ChartOptions } from "chart.js";
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

  const configData = data?.map((item) => item.amount);

  const config = {
    datasets: [
      {
        data: configData,
        backgroundColor: ["#27462C", "#56915D", "#B9D4B9"],
        hoverOffset: 4,
        offset: 0,
        rotation: 30,
        borderWidth: 3,
        radius: 60,
        outerStart: 100,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%",
  };

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart) {
      const { ctx, data } = chart;

      ctx.save();
      ctx.font = "bolder 15px sans-serif";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
    },
  };

  return <Doughnut data={config} options={options} plugins={[textCenter]} />;
}
