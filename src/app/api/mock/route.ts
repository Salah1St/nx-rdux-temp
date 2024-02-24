import { primaryColor } from "@/model/constants";
import { ChartdataSrcs, LineChartdataSrcs } from "@/model/interface";

export async function GET() {
  const carbonDonutData = new Array(3).fill(1).map((i, d) => +(Math.random() * 100).toFixed(2));
  const carbonDonutLabel = ["Direct", "Indirect", "Indirect"];
  const carbonDonutColor = new Array(3).fill("").map(() => primaryColor[+Math.floor(Math.random() * primaryColor.length).toFixed(0)]);
  const carbonDonut: ChartdataSrcs[] = carbonDonutData.map((i, d) => ({ data: i, label: carbonDonutLabel[d], color: carbonDonutColor[d] }));

  const emissionFactorData = new Array(7).fill(1).map((i, d) => +(Math.random() * 100).toFixed(2));
  const emissionFactorLabel = ["Electricity", "Water", "Car", "Food", "Waste", "Other1", "Other2"];
  const emissionFactor: ChartdataSrcs[] = emissionFactorData.map((i, d) => ({ data: i, label: emissionFactorLabel[d] }));

  const carbonCreditData = new Array(7).fill(1).map((i, d) => +(Math.random() * 1e7).toFixed(0));
  const carbonCreditLabel = new Array(7)
    .fill(new Date().getFullYear())
    .map((i, d) => String(i - d))
    .reverse();
  const carbonCredit: ChartdataSrcs[] = carbonCreditData.map((i, d) => ({ data: i, label: carbonCreditLabel[d] }));

  const carbonCreditLineData1 = new Array(7).fill(1).map((i, d) => +(Math.random() * 1e7).toFixed(0));
  const carbonCreditLineData2 = new Array(7).fill(1).map((i, d) => +(Math.random() * 1e7).toFixed(0));
  const carbonCreditLineLabel = new Array(7)
    .fill(new Date().getFullYear())
    .map((i, d) => String(i - d))
    .reverse();
  const carbonCreditLine: LineChartdataSrcs[] = carbonCreditLineData1.map((i, d) => ({ data: [i, carbonCreditLineData2[d]], label: carbonCreditLineLabel[d] }));

  return Response.json({ carbonDonut: carbonDonut, emissionFactor: emissionFactor, carbonCredit: carbonCredit, carbonCreditLine: carbonCreditLine });
}
