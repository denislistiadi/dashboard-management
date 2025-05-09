import { ROUTE_DOMAINS } from "@/constants/route.constant";
import DomainPage from "@/pages/domain-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(ROUTE_DOMAINS)({
  component: DomainPage,
});
