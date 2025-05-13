import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface AppSelectProps {
  placeholder?: string;
  className?: string;
  options: { value: string; label: string }[];
}

export function AppSelect({ placeholder, className, options }: AppSelectProps) {
  return (
    <Select>
      <SelectTrigger className={cn("w-[220px]", className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
