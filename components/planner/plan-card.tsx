import React from "react";
import { Card } from "../ui/card";
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
import Planner from "./Planner";
import { Button } from "../ui/button";
import { Assignment } from "./assignment";
import { ScrollArea } from "../ui/scroll-area";

const resources = [
  {
    id: "r1",
    name: "CECS 448",
    type: "other",
    details: {image: "/homework.png"},
  },
  {
    id: "r2",
    name: "CECS 329",
    type: "other",
    details: {image: "/homework.png"},
  },
];

const appointments = [
  {
    id: "a1",
    title: "Project 3",
    start: new Date("2025-12-15T00:01"),
    end: new Date("2025-12-15T10:00"),
    resourceId: "r1",
    order: 0,
    details: {},
  },
  {
    id: "a2",
    title: "Homework 5",
    start: new Date("2025-12-19T10:30"),
    end: new Date("2025-12-19T11:15"),
    resourceId: "r1",
    order: 1,
    details: {},
  },
  {
    id: "a3",
    title: "Midterm II",
    start: new Date("2025-12-17T10:30"),
    end: new Date("2025-12-17T11:15"),
    resourceId: "r2",
    order: 0,
    details: {},
  },
  {
    id: "a4",
    title: "Homework 2",
    start: new Date("2025-12-13T10:30"),
    end: new Date("2025-12-13T11:15"),
    resourceId: "r2",
    order: 1,
    details: {},
  },

];

export const PlanCard = () => {
  return (
		<Planner initialAppointments={appointments} initialResources={resources} />
   );
};
