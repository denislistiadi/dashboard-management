import { cn } from "@/lib/utils";

export function AppContainer({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <main className={cn(`bg-slate-100 p-6 flex h-full`, className)}>{children}</main>
  );
}
