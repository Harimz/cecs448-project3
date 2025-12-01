import React, { useEffect, useMemo, useState } from "react";
import { useCalendar } from "@/contexts/PlannerContext";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useData } from "@/contexts/PlannerDataContext";
import AddAppointmentDialog from "./AddAppointmentDialog";
import {
  Edit,
  Ellipsis,
  File,
  FilePenLine,
  Filter,
  Fullscreen,
  Pointer,
  Settings,
  X,
} from "lucide-react";

interface CalendarToolbarProps extends React.HTMLAttributes<HTMLDivElement> {}

const CalendarToolbar: React.FC<CalendarToolbarProps> = ({
  className,
  ...props
}) => {
  const { addResource, addAppointment } = useData();



  return (
    <div
      className={cn("flex flex-col justify-end space-x-2", className)}
      {...props}
    >
      <div className="flex items-center justify-between">
        <X className="size-4" />

        <div className="flex gap-12">
          <div className="flex items-center gap-4">

						<AddAppointmentDialog />

            <Button variant="outline" className="cursor-pointer">
              Delete
            </Button>

            <Button variant="ghost" className="cursor-pointer">
              Select All
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Button size="icon" variant="outline" className="cursor-pointer">
              <Fullscreen />
            </Button>
            <Button size="icon" variant="outline" className="cursor-pointer">
              <Pointer />
            </Button>
            <Button size="icon" variant="outline" className="cursor-pointer">
              <Settings />
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default React.memo(CalendarToolbar);
