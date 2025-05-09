import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TableDataProps {
  column: { key: string; label: string }[];
  data: any[];
}

export function TableData({ column, data }: TableDataProps) {
  return (
    <Table>
      <TableHeader className="bg-gradient-to-t from-slate-100 to-transparent">
        <TableRow>
          {column.map((col: { key: string; label: string }) => (
            <TableHead key={col.key}>{col.label}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, idx) => (
          <TableRow key={idx}>
            {column.map((col) =>
              col.key === "action" ? (
                <div className="flex gap-3 my-2">
                  <Button size="sm" variant="ghost" className="text-blue-600">Edit</Button>
                  <Button size="sm" variant="ghost" className="text-red-600">Delete</Button>
                </div>
              ) : (
                <TableCell key={col.key}>
                  {item[col.key as keyof typeof item]}
                </TableCell>
              )
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
