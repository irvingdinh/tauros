import Link from "next/link";
import type { ComponentProps } from "react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar.tsx";

export const AppSidebar = ({ ...props }: ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <Avatar>
                  <AvatarImage src="/images/avatar.jpg" alt="@irvingdinh" />
                  <AvatarFallback>ID</AvatarFallback>
                </Avatar>

                <span className="truncate font-medium">Irving Dinh</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>{/* Placeholder */}</SidebarContent>

      <SidebarFooter>{/* Placeholder */}</SidebarFooter>
    </Sidebar>
  );
};
