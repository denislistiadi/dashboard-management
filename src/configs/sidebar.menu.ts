import {
  CreditCard,
  Globe,
  LayoutDashboardIcon,
  Mailbox,
  ShieldCheck,
} from "lucide-react";

const menus = [
  { title: "Dashboard", url: "/", icon: LayoutDashboardIcon },
  { title: "Domains", url: "/domains", icon: Globe },
  { title: "Mailboxes", url: "/mailboxes", icon: Mailbox },
  { title: "Security", url: "/security", icon: ShieldCheck },
  { title: "Billing", url: "/billing", icon: CreditCard },
];

export default menus;
