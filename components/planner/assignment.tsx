import { Ellipsis, FilePenLine } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export const Assignment = ({ name }: { name: string }) => {
  return (
    <div className="p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FilePenLine className="size-4" />

        <p className="text-muted-foreground">{name}</p>
      </div>

      <Button size="icon" variant="ghost" className="cursor-pointer">
        <Ellipsis />
      </Button>
    </div>
  );
};
