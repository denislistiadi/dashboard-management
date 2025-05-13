import { AppSelect } from "@/components/app-select";
import AppTitle from "@/components/app-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TableData } from "@/containers/table-data";

export default function MailboxPage() {
  const mailboxes = [
    {
      email: "email@example.com",
      user: "John Doe",
      domain: "example.com",
      type: "User",
      quota: "2 / 10 GB",
      status: "Active",
    },
    {
      email: "email@example.org",
      user: "Jane Smith",
      domain: "example.org",
      type: "User",
      quota: "5 / 10 GB",
      status: "Active",
    },
    {
      email: "email@exmple.net",
      user: "Alice Johnson",
      domain: "example.net",
      type: "User",
      quota: "1 / 10 GB",
      status: "Inactive",
    },
    {
      email: "email@example.uk",
      user: "Bob Brown",
      domain: "example.uk",
      type: "Forwarding",
      quota: "3 / 10 GB",
      status: "Pending",
    },
    {
      email: "email@example.edu",
      user: "Charlie Davis",
      domain: "example.edu",
      type: "Alias",
      quota: "0 / 10 GB",
      status: "Inactive",
    },
  ];

  const columns = [
    { key: "email", label: "Email" },
    { key: "user", label: "User/Owner" },
    { key: "domain", label: "Domain" },
    { key: "type", label: "Type" },
    { key: "quota", label: "Quota" },
    { key: "status", label: "Status" },
    { key: "action", label: "" },
  ];

  const domainOptions = [
    { value: "example.com", label: "example.com" },
    { value: "example.org", label: "example.org" },
    { value: "example.net", label: "example.net" },
    { value: "example.edu", label: "example.edu" },
    { value: "example.co.uk", label: "example.co.uk" },
  ];

  const typeOptions = [
    { value: "user", label: "User" },
    { value: "forwarding", label: "Forwarding" },
    { value: "alias", label: "Alias" },
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      <AppTitle title="Mailbox List" />
      <Card className="rounded-md">
        <CardHeader className="flex flex-row justify-between items-center">
          <div className="flex gap-4">
            <Input placeholder="Search Email" className="w-full lg:w-1/2 rounded-sm" />
            <AppSelect placeholder="Select Domain" options={domainOptions} className="hidden xl:flex" />
            <AppSelect placeholder="Select Type" options={typeOptions} className="hidden xl:flex" />
          </div>
          <Button>Add Mailbox</Button>
        </CardHeader>
        <CardContent>
          <TableData column={columns} data={mailboxes} />
        </CardContent>
      </Card>
    </div>
  );
}
