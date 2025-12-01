"use client";

import { Calendar, Home, Inbox, Plus, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { SidebarItem } from "./sidebar-item";

// Menu items.
const items = [
  { title: "Classes", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
];
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="p-2">
        <SidebarGroup>
          <Button className="w-full mt-2 py-6 bg-[#219ebc] hover:bg-[#219ebc]/75 cursor-pointer">
            <div className="flex items-center gap-2 font-bold">
              <Plus />
              Create Now
            </div>
          </Button>

          <SidebarGroupContent className="mt-4">
            <SidebarMenu className="gap-6">
              {items.map((item) => (
                <SidebarItem
                  key={item.title}
                  title={item.title}
                  Icon={item.icon}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
