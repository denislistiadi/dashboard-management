import AppTitle from "@/components/app-title";
import { Button } from "@/components/ui/button";
import CardLayout from "@/containers/card-layout";
import { TableData } from "@/containers/table-data";

const summaryBill = [
  { title: "Account Plan", value: "Pro Plan" },
  { title: "Billing Cycle", value: "Monthly" },
  { title: "Amount Due", value: "Rp 200.000" },
  { title: "Next Billing Date", value: "10 Juni 2025" },
];

const invoices = [
  {
    invoice: "Invoice #12345",
    desc: "Invoice for May 2025",
    amount: "Rp 200.000",
  },
  {
    invoice: "Invoice #12346",
    desc: "Invoice for April 2025",
    amount: "Rp 200.000",
  },
  {
    invoice: "Invoice #12347",
    desc: "Invoice for March 2025",
    amount: "Rp 200.000",
  },
  {
    invoice: "Invoice #12348",
    desc: "Invoice for February 2025",
    amount: "Rp 200.000",
  },
  {
    invoice: "Invoice #12349",
    desc: "Invoice for January 2025",
    amount: "Rp 200.000",
  },
];

function BillingPage() {
  const columns = [
    { key: "invoice", label: "Invoice" },
    { key: "desc", label: "Description" },
    { key: "amount", label: "Amount" },
  ];
  return (
    <div className="flex flex-col gap-6 w-full">
      <AppTitle title="Billing" />
      <div className="grid grid-cols-12 gap-6">
        <CardLayout
          title="Billing Summary"
          className="col-span-12 lg:col-span-7"
        >
          <div className="flex flex-col gap-2 text-sm">
            {summaryBill.map((item, idx) => (
              <div key={idx} className="flex justify-between gap-4">
                <p className="text-muted-foreground">{item.title}</p>
                <p className="text-primary/90 font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </CardLayout>
        <CardLayout
          title="Payment Method"
          className="col-span-12 lg:col-span-5"
        >
          <div className="flex flex-col gap-2 text-sm">
            <p className="text-muted-foreground">Credit Card</p>
            <p className="text-primary/90 font-medium">**** **** **** 1234</p>
          </div>
          <Button className="mt-4" variant="outline">
            Update Payment Method
          </Button>
        </CardLayout>
        <CardLayout
          title="Billing Settings"
          className="col-span-12 lg:col-span-4"
        >
          <div className="flex flex-col gap-2 text-sm">
            <p className="text-muted-foreground">Billing Address</p>
            <p className="text-primary/90 font-medium">
              123 Main St, City, Country
            </p>
            <Button className="mt-4" variant="outline">
              Update Billing Address
            </Button>
          </div>
        </CardLayout>
        <CardLayout
          title="Billing History"
          className="col-span-12 lg:col-span-8"
        >
          <div className="flex flex-col gap-2 text-sm">
            <TableData column={columns} data={invoices} />
          </div>
        </CardLayout>
      </div>
    </div>
  );
}

export default BillingPage;
