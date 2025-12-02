import { Ellipsis, FilePenLine, Tag } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export const Assignment = ({ name }: { name: string }) => {
  return (
    <div className="p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FilePenLine className="size-4" />

        <div>
          <p className="text-muted-foreground">{name}</p>
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-1 bg-[#219ebc]/50 rounded-full px-2 py-0.5">
              <Tag className="size-2 text-white" />
              <p className="text-[10px] text-white font-semibold">HW</p>
            </div>
            <div className="flex items-center gap-1 bg-[#219ebc]/50 rounded-full px-2 py-0.5">
              <Tag className="size-2 text-white" />
              <p className="text-[10px] text-white font-semibold">Upcoming</p>
            </div>
          </div>
        </div>
      </div>

      <Button size="icon" variant="ghost" className="cursor-pointer">
        <Ellipsis />
      </Button>
    </div>
  );
};
