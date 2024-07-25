"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

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
// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig

const chartData = [
      {
        "name": "Calories",
        "amount": 197.83,
        "unit": "kcal",
        "percentOfDailyNeeds": 9.89
      },
      {
        "name": "Fat",
        "amount": 10.38,
        "unit": "g",
        "percentOfDailyNeeds": 15.97
      },
      {
        "name": "Saturated Fat",
        "amount": 3.24,
        "unit": "g",
        "percentOfDailyNeeds": 20.28
      },
      {
        "name": "Carbohydrates",
        "amount": 13.09,
        "unit": "g",
        "percentOfDailyNeeds": 4.36
      },
      {
        "name": "Net Carbohydrates",
        "amount": 11.78,
        "unit": "g",
        "percentOfDailyNeeds": 4.28
      },
      {
        "name": "Sugar",
        "amount": 4.77,
        "unit": "g",
        "percentOfDailyNeeds": 5.3
      },
      {
        "name": "Cholesterol",
        "amount": 372.0,
        "unit": "mg",
        "percentOfDailyNeeds": 124.0
      },
      {
        "name": "Sodium",
        "amount": 294.02,
        "unit": "mg",
        "percentOfDailyNeeds": 12.78
      },
      {
        "name": "Alcohol",
        "amount": 0.0,
        "unit": "g",
        "percentOfDailyNeeds": 100.0
      },
      {
        "name": "Protein",
        "amount": 14.45,
        "unit": "g",
        "percentOfDailyNeeds": 28.89
      },
      {
        "name": "Selenium",
        "amount": 31.67,
        "unit": "µg",
        "percentOfDailyNeeds": 45.24
      },
      {
        "name": "Vitamin B2",
        "amount": 0.56,
        "unit": "mg",
        "percentOfDailyNeeds": 33.22
      },
      {
        "name": "Phosphorus",
        "amount": 245.74,
        "unit": "mg",
        "percentOfDailyNeeds": 24.57
      },
      {
        "name": "Vitamin K",
        "amount": 21.05,
        "unit": "µg",
        "percentOfDailyNeeds": 20.05
      },
      {
        "name": "Folate",
        "amount": 77.72,
        "unit": "µg",
        "percentOfDailyNeeds": 19.43
      },
      {
        "name": "Vitamin B5",
        "amount": 1.72,
        "unit": "mg",
        "percentOfDailyNeeds": 17.21
      },
      {
        "name": "Iron",
        "amount": 3.08,
        "unit": "mg",
        "percentOfDailyNeeds": 17.1
      },
      {
        "name": "Vitamin B6",
        "amount": 0.33,
        "unit": "mg",
        "percentOfDailyNeeds": 16.68
      },
      {
        "name": "Vitamin A",
        "amount": 802.42,
        "unit": "IU",
        "percentOfDailyNeeds": 16.05
      },
      {
        "name": "Vitamin B12",
        "amount": 0.89,
        "unit": "µg",
        "percentOfDailyNeeds": 14.83
      },
      {
        "name": "Vitamin D",
        "amount": 2.0,
        "unit": "µg",
        "percentOfDailyNeeds": 13.33
      },
      {
        "name": "Potassium",
        "amount": 417.49,
        "unit": "mg",
        "percentOfDailyNeeds": 11.93
      },
      {
        "name": "Copper",
        "amount": 0.22,
        "unit": "mg",
        "percentOfDailyNeeds": 10.96
      },
      {
        "name": "Zinc",
        "amount": 1.62,
        "unit": "mg",
        "percentOfDailyNeeds": 10.83
      },
      {
        "name": "Vitamin C",
        "amount": 7.98,
        "unit": "mg",
        "percentOfDailyNeeds": 9.67
      },
      {
        "name": "Calcium",
        "amount": 93.35,
        "unit": "mg",
        "percentOfDailyNeeds": 9.34
      },
      {
        "name": "Magnesium",
        "amount": 33.06,
        "unit": "mg",
        "percentOfDailyNeeds": 8.27
      },
      {
        "name": "Vitamin E",
        "amount": 1.19,
        "unit": "mg",
        "percentOfDailyNeeds": 7.96
      },
      {
        "name": "Vitamin B1",
        "amount": 0.11,
        "unit": "mg",
        "percentOfDailyNeeds": 7.09
      },
      {
        "name": "Manganese",
        "amount": 0.11,
        "unit": "mg",
        "percentOfDailyNeeds": 5.61
      },
      {
        "name": "Fiber",
        "amount": 1.31,
        "unit": "g",
        "percentOfDailyNeeds": 5.22
      },
      {
        "name": "Vitamin B3",
        "amount": 1.02,
        "unit": "mg",
        "percentOfDailyNeeds": 5.09
      }
    ]

export default function NutritionTable() {

  function selectColor() {
    const hue = Math.floor(Math.random() * 100) * 137.508;
    return `hsl(${hue},50%,75%)`;
  }

  return (
    <Card className="w-full ">
      <CardHeader>
        <CardTitle>Nutrition Information</CardTitle>
        <CardDescription>Percent of Daily Recommended</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 250,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              fontSize={12}
              // offset={0}
              // width={150}
              interval={0}
              hide
            />
            
            <XAxis dataKey="percentOfDailyNeeds" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              isAnimationActive={false}
              dataKey="percentOfDailyNeeds"
              layout="vertical"
              fill={selectColor()}
            >
              <LabelList
                dataKey="name"
                position="left"
                offset={8}
                className="fill-foreground"
                fontSize={12}
                dx={-150}
                
              />
              <LabelList
                dataKey="amount"
                position="left"
                offset={8}
                className="fill-foreground"
                fontSize={12}
                dx={-50}
              />
              <LabelList
                dataKey="unit"
                position="left"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
              <LabelList
                dataKey="percentOfDailyNeeds"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
                formatter={(value:number) => {return value + "%"}}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">

      </CardFooter>
    </Card>
  )
}
