import { ROUTE_DOMAINS } from '@/constants/route.constant'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(ROUTE_DOMAINS)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/domains/"!</div>
}
