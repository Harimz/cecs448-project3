"use client";

import {
  ChevronDown,
  ChevronRight,
  File,
  Folder,
  LucideIcon,
  LucideProps,
  MessageCircleCode,
} from "lucide-react";
import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  useState,
} from "react";
import { SidebarFolder } from "./sidebar-folder";

interface Props {
  title: string;
  Icon?: LucideIcon;
}
export const SidebarItem = ({ title, Icon }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const IconComponent = Icon ?? File;

  return (
    <div>
      <div
        className="flex items-center justify-between w-full cursor-pointer"
        onClick={() => setExpanded((state) => !state)}
      >
        <div className="flex items-center gap-2">
          <IconComponent className="size-4" />

          <span className="font-bold">{title}</span>
        </div>

        {expanded ? (
          <ChevronDown className="size-4" />
        ) : (
          <ChevronRight className="size-4" />
        )}
      </div>

      <div
        className={`overflow-hidden transition-all duration-200 px-4 flex flex-col gap-2 mt-2 ${
          expanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {" "}
        <SidebarFolder title="CECS 448" />
        <SidebarFolder title="CECS 329" />
      </div>
    </div>
  );
};
