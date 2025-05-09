import { createFileRoute } from "@tanstack/react-router";
import { ROUTE_INDEX } from "@/constants/route.constant";
import Home from "@/pages/Home";

export const Route = createFileRoute(ROUTE_INDEX)({
  component: Home,
});
