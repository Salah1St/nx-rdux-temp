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

  const footPrintFactorData = new Array(7).fill(1).map((i, d) => +(Math.random() * 100).toFixed(2));
  const footPrintFactorLabel = ["Electricity", "Water", "Car", "Food", "Waste", "Other1", "Other2"];
  const footPrintFactor: ChartdataSrcs[] = footPrintFactorData.map((i, d) => ({ data: i, label: footPrintFactorLabel[d] }));

  const carbonCreditData = new Array(7).fill(1).map((i, d) => +(Math.random() * 1e7).toFixed(0));
  const carbonCreditLabel = new Array(7)
    .fill(new Date().getFullYear())
    .map((i, d) => String(i - d))
    .reverse();
  const carbonCredit: ChartdataSrcs[] = carbonCreditData.map((i, d) => ({ data: i, label: carbonCreditLabel[d] }));

  const totalEmissionLineData1 = new Array(7).fill(1).map((i, d) => +(Math.random() * 1e7).toFixed(0));
  const totalEmissionLineData2 = new Array(7).fill(1).map((i, d) => +(Math.random() * 1e7).toFixed(0));
  const totalEmissionLineLabel = new Array(7)
    .fill(new Date().getFullYear())
    .map((i, d) => String(i - d))
    .reverse();
  const totalEmissionLine: LineChartdataSrcs[] = totalEmissionLineData1.map((i, d) => ({ data: [i, totalEmissionLineData2[d]], label: totalEmissionLineLabel[d] }));

  const totalFootPrintLineData1 = new Array(7).fill(1).map((i, d) => +(Math.random() * 1e7).toFixed(0));
  const totalFootPrintLineData2 = new Array(7).fill(1).map((i, d) => +(Math.random() * 1e7).toFixed(0));
  const totalFootPrintLineLabel = new Array(7)
    .fill(new Date().getFullYear())
    .map((i, d) => String(i - d))
    .reverse();
  const totalFootPrintLine: LineChartdataSrcs[] = totalFootPrintLineData1.map((i, d) => ({ data: [i, totalFootPrintLineData2[d]], label: totalFootPrintLineLabel[d] }));

  return Response.json({
    carbonDonut: carbonDonut,
    emissionFactor: emissionFactor,
    footPrintFactor: footPrintFactor,
    carbonCredit: carbonCredit,
    totalEmissionLine: totalEmissionLine,
    totalFootPrintLine: totalFootPrintLine,
  });
}
