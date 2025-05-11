import AppTitle from "@/components/app-title";
import { Progress } from "@/components/ui/progress";
import ActivityDashboard from "@/containers/activity-dashboard";
import CardDashboard from "@/containers/card-dashboard";
import DonutChartDashboard from "@/containers/donutchart-dashboard";
import LineChartDashboard from "@/containers/linechart-dashboard";

function HomePage() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <AppTitle title="Dashboard" />
      <div className="grid grid-cols-12 gap-6 w-full">
        <CardDashboard title="Total Domain" value={20}></CardDashboard>
        <CardDashboard title="Total Mailbox" value={120}></CardDashboard>
        <CardDashboard title="Total Storage">
          <Progress value={40} className="my-3" aria-label="progres-storage" />
        </CardDashboard>
        <CardDashboard title="Service Status" value={"Active"}></CardDashboard>
        <LineChartDashboard />
        <DonutChartDashboard />
        <ActivityDashboard />
      </div>
    </div>
  );
}

export default HomePage;
