import { ROUTE_BILLING } from "@/constants/route.constant";
import BillingPage from "@/pages/billing-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(ROUTE_BILLING)({
  component: BillingPage,
});
