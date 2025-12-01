"use client";

import { usePathname } from "next/navigation";
import { NavbarItem } from "./navbar-item";
import { UserAvatar } from "./user-avatar";
import { UserButton } from "./user-button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const navbarItems = [
  {
    text: "Dashboard",
    href: "/",
  },
  {
    text: "Planner",
    href: "/planner",
  },
  {
    text: "Settings",
    href: "/settings",
  },
];

const avatarImages = ["", "", "", ""];

export const Navbar = () => {
  const path = usePathname();

  return (
    <div className="w-full mx-auto flex-1 border-b px-16 py-6 flex items-center gap-30">
      <h1 className="font-extralight text-2xl">Planner</h1>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-6 items-center">
          {navbarItems.map((item, i) => (
            <NavbarItem
              text={item.text}
              href={item.href}
              key={i}
              active={path === item.href}
            />
          ))}
        </div>

        <div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 translate-x-9">
              <div className="h-2 w-2 bg-green-500 rounded-full" />

              <span className="text-sm font-bold text-green-500">ONLINE</span>
            </div>

            <div className="flex items-center">
              <UserAvatar className="translate-x-9 z-6" />
              <UserAvatar className="translate-x-6 z-4" />
              <UserAvatar className="translate-x-3 z-2" />
              <UserAvatar />
            </div>

            <div className="relative">
              <Input placeholder="Search..." className="pl-9" />

              <Search className="size-4 absolute top-2.5 left-2.5" />
            </div>

            <UserButton />
          </div>
        </div>
      </div>
    </div>
  );
};
