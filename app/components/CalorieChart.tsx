"use client"

import { TrendingUp } from "lucide-react"
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
} from "@/components/ui/chart"
import { useState } from "react";
const chartData = [
  { type: "protein", value: 28.38, fill: "blue" },
  { type: "fat", value: 45.9, fill: "red" },
  { type: "carbohydrate", value: 25.72, fill: "yellow" },
]




const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "blue",
  },
  safari: {
    label: "Safari",
    color: "red",
  },
  firefox: {
    label: "Firefox",
    color: "orange",
  },
  edge: {
    label: "Edge",
    color: "green",
  },
  other: {
    label: "Other",
    color: "brown",
  },
} satisfies ChartConfig

export function CalorieChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
        {/* <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}> */}
          {/* {payload.name} */}
          {/* Calories */}
        {/* </text> */}
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut Active</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          // className="mx-auto aspect-square max-h-[250px]"
          className="mx-auto aspect-square max-h-[350px]"

        >

          <PieChart  >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="type"
              innerRadius={60}
              outerRadius={80}
              strokeWidth={5}
              activeIndex={activeIndex}
              // activeShape={({
              //   outerRadius = 0,
              //   ...props
              // }: PieSectorDataItem) => (
              //   <Sector {...props} outerRadius={outerRadius + 10}/>
              // )}
              activeShape={renderActiveShape}
              onMouseOver={(data, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              isAnimationActive={true}
            />

            {/* <Label value={"calories"} offset={0} position="center" >Calories</Label> */}
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
