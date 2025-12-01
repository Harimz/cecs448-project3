import { ChevronDown, RefreshCcw } from "lucide-react";
import React from "react";

export const Header = ({ classTitle }: { classTitle: string }) => {
  return (
    <div className="flex justify-between">
      <h1 className="text-muted-foreground text-xl">
        Assignment Planner - {classTitle}
      </h1>

      <div className="flex items-center gap-2 p-2 hover:shadow-sm hover:rounded-md cursor-pointer">
        <p>August 2025 - December 2025</p>

        <ChevronDown className="size-4" />
      </div>

      <div className="flex gap-2 items-center">
        <p>Showing 3 out of 10 assignments</p>
        <RefreshCcw className="size-4 text-muted-foreground" />
      </div>
    </div>
  );
};
