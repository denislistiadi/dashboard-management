import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CardLayoutProps {
  className?: string;
  title: string;
  children: React.ReactNode;
}

export default function CardLayout({
  className,
  title,
  children,
}: CardLayoutProps ) {
  return (
    <Card className={cn("rounded-md", className)}>
      <CardHeader className="text-primary/90 font-semibold text-lg">
        {title}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
