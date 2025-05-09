import AppTitle from "@/components/app-title";
import { Progress } from "@/components/ui/progress";
import CardDashboard from "@/containers/CardDashboard";

function Home() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <AppTitle title="Dashboard" />
      <div className="grid grid-cols-4 gap-6 w-full">
        <CardDashboard title="Total Domain" value={20}></CardDashboard>
        <CardDashboard title="Total Mailbox" value={120}></CardDashboard>
        <CardDashboard title="Total Storage">
          <Progress value={40} className="my-3" />
        </CardDashboard>
        <CardDashboard title="Service Status" value={"Active"}></CardDashboard>
      </div>
    </div>
  );
}

export default Home;
