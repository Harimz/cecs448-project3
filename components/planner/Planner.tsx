"use client";
import { PlannerProvider, useCalendar } from "@/contexts/PlannerContext";
import {
  PlannerDataContextProvider,
  useData,
} from "@/contexts/PlannerDataContext";
import { calculateNewDates, filterAppointments } from "@/lib/utils";
import { Appointment as AppointmentType, Resource } from "@/models";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import React, { FC, useEffect, useState } from "react";
import { Table, TableBody, TableRow } from "../ui/table";
import Appointment from "./Appointment";
import DropTableCell from "./DropTableCell";
import CalendarToolbar from "./PlannerToolbar";
import ResourceTableCell from "./ResourceTableCell";
import { Timeline } from "./Timeline";
import PlannerHeader from "./PlannerHeader";
import { Input } from "../ui/input";
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
import { Button } from "../ui/button";
import { Assignment } from "./assignment";
import { ScrollArea } from "../ui/scroll-area";
import { WorkloadSummary } from "./WorkloadSummary";
import { AssignmentPlanner } from "./assignment-planner";

export interface PlannerProps extends React.HTMLAttributes<HTMLDivElement> {
  initialResources: Resource[];
  initialAppointments: AppointmentType[];
}

const Planner: React.FC<PlannerProps> = ({
  initialResources,
  initialAppointments,
  ...props
}) => {
  return (
    <div className="overflow-hidden">
      <PlannerDataContextProvider
        initialAppointments={initialAppointments}
        initialResources={initialResources}
      >
        <PlannerProvider>
          <PlannerMainComponent initialResources={initialResources} />
          <h3 className="text-lg font-semibold mb-4 mt-12">Calendar</h3>

          <div className="w-full mt-6">
            <CalendarContent />
          </div>
        </PlannerProvider>
      </PlannerDataContextProvider>
    </div>
  );
};

export interface PlannerMainComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  initialResources: Resource[];
}

const PlannerMainComponent: FC<PlannerMainComponentProps> = ({
  initialResources,
  ...props
}) => {
  return (
    <div className="rounded-md w-full shadow-sm p-4 flex flex-col gap-6">
      <div className="flex flex-col gap-2 max-w-[80vw] min-w-0">
        <div className="flex flex-row h-[30rem]">
          <div className="w-[20%]">
            <div className="relative">
              <Input placeholder="Filter Assignments..." className="pl-10" />

              <Button
                variant="ghost"
                size="icon"
                className="absolute size-4 text-[#219ebc] top-2.5 left-2.5 cursor-pointer hover:text-[#219ebc]/25"
              >
                <Filter />
              </Button>
            </div>

            <ScrollArea className="h-full">
              {initialResources.map((item) => (
                <Assignment key={item.id} name={item.name} />
              ))}
            </ScrollArea>
          </div>

          <div className="ml-[5rem] w-[80%] flex flex-col">
            <CalendarToolbar />

            <AssignmentPlanner />
          </div>
        </div>
      </div>
    </div>
  );
};

const CalendarContent = () => {
  const { viewMode, dateRange, timeLabels } = useCalendar();
  const { resources, appointments, updateAppointment } = useData();

  useEffect(() => {
    return monitorForElements({
      onDrop({ source, location }) {
        const destination = location.current.dropTargets[0]?.data;
        const sourceData = source.data;

        if (!destination || !sourceData) return;

        const appointment = appointments.find(
          (appt) => appt.id === sourceData.appointmentId
        );
        if (!appointment) return;

        const newResource = resources.find(
          (res) => res.id === destination.resourceId
        );
        if (!newResource) return;

        const newDates = calculateNewDates(
          viewMode,
          destination.columnIndex as unknown as number,
          sourceData.columnIndex as unknown as number,
          {
            from: appointment.start,
            to: appointment.end,
          }
        );

        updateAppointment({
          ...appointment,
          start: newDates.start as Date,
          end: newDates.end as Date,
          resourceId: newResource.id,
        });
      },
    });
  }, [appointments]);

  return (
    <div className="flex max-h-[calc(80vh_-_theme(spacing.16))] max-w-[112rem] border-1 flex-col">
      <div className="calendar-scroll flex-grow overflow-auto">
        <Table>
          <Timeline />
          <TableBody>
            {resources.map((resource) => {
              return (
                <TableRow key={resource.id}>
                  <ResourceTableCell resourceItem={resource} />
                  {timeLabels?.map((label, index) => {
                    const filteredAppointments = appointments
                      .filter(
                        (appt) =>
                          filterAppointments(
                            appt,
                            index,
                            dateRange,
                            viewMode
                          ) && appt.resourceId === resource.id
                      )
                      .sort((a, b) => a.start.getTime() - b.start.getTime());

                    const dynamicHeight = filteredAppointments.length * 100;

                    return (
                      <DropTableCell
                        resourceId={resource.id}
                        columnIndex={index}
                        key={index}
                        className="relative border border-gray-200"
                        style={{
                          height: `${
                            viewMode === "day" ? dynamicHeight : undefined
                          }px`,
                        }}
                      >
                        {filteredAppointments.map((appt, i) => (
                          <Appointment
                            appointment={appt}
                            columnIndex={index}
                            resourceId={resource.id}
                            key={appt.id}
                            itemIndex={i}
                          />
                        ))}
                      </DropTableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Planner;
