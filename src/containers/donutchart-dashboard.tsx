import { Pie, PieChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { browser: "used", visitors: 400, fill: "var(--color-used)" },
  { browser: "unused", visitors: 600, fill: "var(--color-unused)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  used: {
    label: "Used",
    color: "hsl(var(--chart-1))",
  },
  unused: {
    label: "Unused",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function DonutChartDashboard() {
  return (
    <Card className="col-span-12 lg:col-span-4 rounded-md">
      <CardHeader className="items-center pb-0">
        <CardTitle>Storage Usage</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
