import * as React from "react";

import { AppLogo } from "@/components/app-logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import menus from "@/configs/sidebar.menu";
import { Link, useLocation } from "@tanstack/react-router";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();
  const pathname = location.pathname;

  const activeClass = "bg-sidebar-accent font-semibold";

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AppLogo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menus.map((item) => (
              <SidebarMenuItem
                key={item.title}
                className={pathname === item.url ? activeClass : ""}
              >
                <SidebarMenuButton tooltip={item.title} asChild>
                  <Link to={item.url} preload="intent">
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <p className="p-2 text-gray-600">Management Dashboard App</p>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
