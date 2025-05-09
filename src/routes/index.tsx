import { createFileRoute } from "@tanstack/react-router";
import { ROUTE_INDEX } from "@/constants/route.constant";
import HomePage from "@/pages/home-page";

export const Route = createFileRoute(ROUTE_INDEX)({
  component: HomePage,
});
