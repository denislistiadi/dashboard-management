import AppTitle from "@/components/app-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TableData } from "@/containers/table-data";

export default function DomainPage() {
  const invoices = [
    {
      domain: "example.com",
      dnsVerification: "Verified",
      status: "Active",
    },
    {
      domain: "example.org",
      dnsVerification: "Pending",
      status: "Inactive",
    },
    {
      domain: "example.net",
      dnsVerification: "Verified",
      status: "Active",
    },
    {
      domain: "example.edu",
      dnsVerification: "Failed",
      status: "Inactive",
    },
    {
      domain: "example.co.uk",
      dnsVerification: "Verified",
      status: "Active",
    },
  ];

  const columns = [
    { key: "domain", label: "Domains" },
    { key: "dnsVerification", label: "DNS Verification" },
    { key: "status", label: "Status" },
    { key: "action", label: "" },
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      <AppTitle title="Domain List" />
      <Card className="rounded-md">
        <CardHeader className="flex flex-row justify-between items-center">
          <Input placeholder="Search domain" className="w-1/5 rounded-sm" />
          <Button>Add Domain</Button>
        </CardHeader>
        <CardContent>
          <TableData column={columns} data={invoices} />
        </CardContent>
      </Card>
    </div>
  );
}
