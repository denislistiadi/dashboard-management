import { ROUTE_SECURITY } from "@/constants/route.constant";
import SecurityPage from "@/pages/security-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(ROUTE_SECURITY)({
  component: SecurityPage,
  
});
