import { ROUTE_SECURITY } from "@/constants/route.constant";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(ROUTE_SECURITY)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/security/"!</div>;
}
