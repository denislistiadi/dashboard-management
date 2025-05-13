import AppTitle from "@/components/app-title";
import { Button } from "@/components/ui/button";
import CardLayout from "@/containers/card-layout";
import { BadgeAlert, BadgeCheck, NotebookText, Plus } from "lucide-react";

const listLogin = [
  {
    isSecure: true,
    lastLogin: "10 May 2025, 10.00 AM",
    location: "New York, USA",
  },
  {
    isSecure: false,
    lastLogin: "9 May 2025, 09.00 AM",
    location: "Los Angeles, USA",
  },
  { isSecure: true, lastLogin: "8 May 2025, 08.00 AM", location: "London, UK" },
  {
    isSecure: false,
    lastLogin: "7 May 2025, 07.00 AM",
    location: "Tokyo, Japan",
  },
  {
    isSecure: true,
    lastLogin: "6 May 2025, 06.00 AM",
    location: "Sydney, Australia",
  },
];

const listToken = [
  {
    tokenName: "Token 1",
    lastUsed: "Last used 10 May 2025, 10.00 AM",
  },
  {
    tokenName: "Token 2",
    lastUsed: "Last used 9 May 2025, 09.00 AM",
  },
];

function SecurityPage() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <AppTitle title="Security" />
      <CardLayout title="Recent Login Activity">
        <div className="flex flex-col gap-3 text-primary/90">
          {listLogin.map((item, idx) => (
            <div key={idx} className="flex gap-4 justify-between">
              <div className="flex gap-2 items-center">
                {item.isSecure ? (
                  <BadgeCheck size={16} className="text-emerald-500" />
                ) : (
                  <BadgeAlert size={16} className="text-amber-500" />
                )}
                <p className="line-clamp-1">{item.lastLogin}</p>
              </div>
              <p className="text-muted-foreground truncate">{item.location}</p>
            </div>
          ))}
        </div>
      </CardLayout>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <CardLayout title="Two-Factor Authentication">
          <div className="flex flex-col gap-3">
            {listToken.map((item, idx) => (
              <div key={idx} className="flex justify-between gap-4">
                <div className="flex gap-4">
                  <div className="py-1.5">
                    <NotebookText size={16} className="text-muted-foreground" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-primary/90">{item.tokenName}</p>
                    <p className="text-muted-foreground text-xs">
                      {item.lastUsed}
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="text-xs text-red-600 border-red-600 hover:text-red-400 rounded-sm px-2 py-1 h-fit"
                >
                  Revoke
                </Button>
              </div>
            ))}
            <Button className="w-fit mt-2  rounded-md px-2 py-1">
              <Plus size={10} />
              Generate New Token
            </Button>
          </div>
        </CardLayout>
        <CardLayout title="Security Settings">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between gap-4">
              <p className="text-primary/90">Change Password</p>
              <Button variant="outline" className="text-xs">
                Update
              </Button>
            </div>
            <div className="flex justify-between gap-4">
              <p className="text-primary/90">Security Questions</p>
              <Button variant="outline" className="text-xs">
                Update
              </Button>
            </div>
          </div>
        </CardLayout>
      </div>
    </div>
  );
}

export default SecurityPage;
