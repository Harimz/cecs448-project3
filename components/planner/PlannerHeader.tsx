import React, { FC, useEffect, useState } from "react";
import { endOfDay, endOfWeek, startOfWeek } from "date-fns";
import { PlannerProvider, useCalendar } from "@/contexts/PlannerContext";
import { DateRangePicker } from "../ui/date-range-picker";
import { DateRange } from "react-day-picker";
import { RefreshCcw } from "lucide-react";

export interface PlannerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  classTitle: string;
}

const PlannerHeader: FC<PlannerHeaderProps> = ({ classTitle, ...props }) => {
  const { setDateRange } = useCalendar();
  const [range, setRange] = useState<DateRange>({
    from: startOfWeek(new Date(), {
      locale: { options: { weekStartsOn: 1 } },
    }),
    to: endOfWeek(new Date()),
  });
  const handleDateRangeUpdate = (range: DateRange) => {
    const from = range.from;
    const to = range.to ?? endOfDay(range.from as Date);
    setDateRange({
      from:from,
      to:to
    });
  };
  useEffect(() => {
    setDateRange(range);
  }, [range]);

  return (
    <div className="flex justify-between">
      <h1 className="text-muted-foreground text-xl">
        Assignment Planner - {classTitle}
      </h1>

       <DateRangePicker
        onUpdate={(value) => handleDateRangeUpdate(value.range)}
        initialDateFrom={range.from}
        initialDateTo={range.to}
        align="start"
        showCompare={false}
      />

      <div className="flex gap-2 items-center">
        <p>Showing 3 out of 10 assignments</p>
        <RefreshCcw className="size-4 text-muted-foreground" />
      </div>
    </div>
  );
};

export default PlannerHeader;
