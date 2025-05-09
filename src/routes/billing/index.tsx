import { ROUTE_BILLING } from '@/constants/route.constant'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(ROUTE_BILLING)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/billing/"!</div>
}
