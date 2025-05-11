import { Card, CardContent, CardHeader } from "@/components/ui/card";

const activityData = [
  { user: "John Doe", action: "created a new domain", time: "2 hours ago" },
  { user: "Jane Smith", action: "added a new mailbox", time: "3 hours ago" },
  {
    user: "Alice Johnson",
    action: "updated mailbox settings",
    time: "5 hours ago",
  },
  { user: "Bob Brown", action: "deleted a domain", time: "1 day ago" },
  {user: "Charlie Green", action: "created a new user", time: "2 days ago" }, 
];

export default function ActivityDashboard() {
  return (
    <Card className="col-span-12 rounded-md">
      <CardHeader className="text-primary/90 font-semibold text-lg">Latest Activity</CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {activityData.map((activity, index) => (
            <div key={index} className="flex justify-between">
              <div className="flex gap-1 items-center text-sm text-muted-foreground">
                <span className="h-2 w-2 mr-2 rounded-full bg-blue-600"></span>
                <span className="text-primary/90 font-medium">{activity.user}</span>
                <span className="text-sm text-muted-foreground">
                  {activity.action}
                </span>
              </div>
              <span className="text-sm text-muted-foreground hidden md:block">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
