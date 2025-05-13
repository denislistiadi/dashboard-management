import { AppSelect } from "@/components/app-select";
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

  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      <AppTitle title="Domain List" />
      <Card className="rounded-md">
        <CardHeader className="flex flex-row justify-between items-center">
          <div className="flex gap-6">
            <Input placeholder="Search domain" className="w-full lg:w-1/2 rounded-sm" />
            <AppSelect
              placeholder="Select Status"
              options={statusOptions}
              className="hidden lg:flex"
            />
          </div>
          <Button>Add Domain</Button>
        </CardHeader>
        <CardContent>
          <TableData column={columns} data={invoices} />
        </CardContent>
      </Card>
    </div>
  );
}
