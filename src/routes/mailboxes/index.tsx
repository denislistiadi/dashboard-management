import { ROUTE_MAILBOXES } from "@/constants/route.constant";
import MailboxPage from "@/pages/mailbox-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(ROUTE_MAILBOXES)({
  component: MailboxPage,
});
