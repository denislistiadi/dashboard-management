import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface CardDashboardProps {
  Icon?: LucideIcon | any;
  title: string;
  activeColor?: string;
  value?: string | number;
  children?: React.ReactNode;
}

export default function CardDashboard({
  Icon,
  title,
  activeColor = "blue",
  value,
  children,
}: CardDashboardProps) {
  return (
    <Card className="flex flex-row col-span-12 md:col-span-6 lg:col-span-3 gap-4 p-4 items-center rounded-md">
      {Icon && (
        <div
          className={cn("rounded-lg p-3 text-white", `bg-${activeColor}-500`)}
        >
          <Icon />
        </div>
      )}
      <div className="flex flex-col w-full gap-1">
        <h2 className="text-md text-primary/90 font-medium">{title}</h2>
        {value && <p className="text-xl text-primary font-semibold">{value}</p>}
        {children}
      </div>
    </Card>
  );
}


