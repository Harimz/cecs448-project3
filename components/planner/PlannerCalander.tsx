"use client";

import React, { useEffect } from "react";
import CalendarToolbar from "./PlannerToolbar";
import { PlannerProvider, useCalendar } from "@/contexts/PlannerContext";
import {
  PlannerDataContextProvider,
  useData,
} from "@/contexts/PlannerDataContext";
import { filterAppointments } from "@/lib/utils";
import { Table, TableBody, TableRow } from "../ui/table";
import { Timeline } from "./Timeline";
import ResourceTableCell from "./ResourceTableCell";
import DropTableCell from "./DropTableCell";
import Appointment from "./Appointment";

const initialResources = [
  {
    id: "a1",
    name: "Project 3",
    type: "other",
    details: { image: "/homework.png" },
  },
  {
    id: "a2",
    name: "Homework 5",
    type: "other",
    details: { image: "/homework.png" },
  },
  {
    id: "a3",
    name: "Midterm II",
    type: "other",
    details: { image: "/homework.png" },
  },
  {
    id: "a4",
    name: "Study",
    type: "other",
    details: { image: "/homework.png" },
  },
];

const initialAppointments = [
  {
    id: "a1",
    title: "Weekly Sync",
    start: new Date("2025-01-01T09:00"),
    end: new Date("2025-01-01T10:00"),
    resourceId: "r1",
    order: 0,
    details: { notes: "Bring slides" },
  },
  {
    id: "a2",
    title: "Setup Equipment",
    start: new Date("2025-01-01T10:30"),
    end: new Date("2025-01-01T11:15"),
    resourceId: "r2",
    order: 1,
    details: { items: ["projector"] },
  },
];

export const PlannerCalander = () => {
  return (
    <>
      <PlannerDataContextProvider
        initialAppointments={initialAppointments}
        initialResources={initialResources}
      >
        <PlannerProvider>
          <div className="overflow-hidden">
            <CalendarContent />
          </div>{" "}
        </PlannerProvider>
      </PlannerDataContextProvider>
    </>
  );
};

const CalendarContent = () => {
  const { viewMode, dateRange, timeLabels } = useCalendar();
  const { resources, appointments, updateAppointment } = useData();

  // useEffect(() => {
  //   return monitorForElements({
  //     onDrop({ source, location }) {
  //       const destination = location.current.dropTargets[0]?.data;
  //       const sourceData = source.data;

  //       if (!destination || !sourceData) return;

  //       const appointment = appointments.find(
  //         (appt) => appt.id === sourceData.appointmentId
  //       );
  //       if (!appointment) return;

  //       const newResource = resources.find(
  //         (res) => res.id === destination.resourceId
  //       );
  //       if (!newResource) return;

  //       const newDates = calculateNewDates(
  //         viewMode,
  //         destination.columnIndex as unknown as number,
  //         sourceData.columnIndex as unknown as number,
  //         {
  //           from: appointment.start,
  //           to: appointment.end,
  //         }
  //       );

  //       updateAppointment({
  //         ...appointment,
  //         start: newDates.start as Date,
  //         end: newDates.end as Date,
  //         resourceId: newResource.id,
  //       });
  //     },
  //   });
  // }, [appointments]);

  return (
    <div className="flex max-h-[calc(80vh_-_theme(spacing.16))] max-w-[calc(70vw_-_theme(spacing.16))] border-1 flex-col">
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
