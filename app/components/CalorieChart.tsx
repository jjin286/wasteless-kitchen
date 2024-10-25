"use client"

import { Label, Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

const chartConfig = {
  protein: {
    label: "Protein",
    color: "blue",
  },
  fat: {
    label: "Fat",
    color: "red",
  },
  carbohydrate: {
    label: "Carbohydrate",
    color: "orange",
  },
} satisfies ChartConfig

export function CalorieChart(props: {data:Array<{type:string, value:number, fill:string}>}) {
  const chartData = props.data;
  const activeIndex = Array.from({length:chartData.length},(v,k)=>k);

  const renderActiveShape = (props:{ cx:number, cy:number, midAngle:number, innerRadius:number, outerRadius:number, startAngle:number, endAngle:number, fill:any, payload:any, percent:number, value:any}) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${payload.type} ${value}%`}</text>
      </g>
    );
  };

  return (
    <Card className="flex flex-col w-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Caloric Breakdown</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-w-[800px]"
        >
          <PieChart  >
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="type"
              innerRadius={60}
              outerRadius={80}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              isAnimationActive={true}
            />
          </PieChart>
        </ChartContainer>

      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  )
}
