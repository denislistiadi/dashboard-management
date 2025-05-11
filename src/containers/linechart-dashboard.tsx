import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { day: "Sunday", domain: 186, mailbox: 80 },
  { day: "Monday", domain: 305, mailbox: 200 },
  { day: "Tuesday", domain: 237, mailbox: 120 },
  { day: "Wednesday", domain: 73, mailbox: 190 },
  { day: "Thursday", domain: 209, mailbox: 130 },
  { day: "Friday", domain: 214, mailbox: 140 },
  { day: "Saturday", domain: 297, mailbox: 200 },
];

const chartConfig = {
  domain: {
    label: "Domain",
    color: "hsl(var(--chart-1))",
  },
  mailbox: {
    label: "Mailbox",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function LineChartDashboard() {
  const uniqueKeys = [
    ...new Set(chartData.flatMap((item) => Object.keys(item))),
  ];
  const configKeys = Object.keys(chartConfig);

  return (
    <Card className="col-span-12 lg:col-span-8 rounded-md">
      <CardHeader>
        <CardTitle className="text-primary/90">
          Domain and Mailbox Creation Trends (Week)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={uniqueKeys[0]}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient
                id={`${uniqueKeys[1]}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor={`var(--color-${uniqueKeys[1]})`}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={`var(--color-${uniqueKeys[1]})`}
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient
                id={`${configKeys[1]}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor={`var(--color-${uniqueKeys[2]})`}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={`var(--color-${uniqueKeys[2]})`}
                  stopOpacity={0.1}
                />
              </linearGradient>

              {/* <LinearGradientComponent color={uniqueKeys[1]} />
              <LinearGradientComponent color={uniqueKeys[2]} /> */}
            </defs>
            {/* <AreaComponent color={uniqueKeys[1]} />
            <AreaComponent color={uniqueKeys[2]} /> */}
            <Area
              dataKey={uniqueKeys[2]}
              type="natural"
              fill={`url(#${uniqueKeys[2]})`}
              fillOpacity={0.4}
              stroke={`var(--color-${uniqueKeys[2]})`}
              stackId="a"
            />
            <Area
              dataKey={uniqueKeys[1]}
              type="natural"
              fill={`url(#${uniqueKeys[1]})`}
              fillOpacity={0.4}
              stroke={`var(--color-${uniqueKeys[1]})`}
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
