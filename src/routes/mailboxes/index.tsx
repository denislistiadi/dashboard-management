import { ROUTE_MAILBOXES } from '@/constants/route.constant'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(ROUTE_MAILBOXES)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/mailboxes/"!</div>
}
