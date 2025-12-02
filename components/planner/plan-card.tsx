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
    name: "Project 3",
    type: "other",
    details: {image: "/homework.png"},
  },
  {
    id: "r2",
    name: "Homework 5",
    type: "other",
    details: {image: "/homework.png"},
  },
  {
    id: "r3",
    name: "Midterm II",
    type: "other",
    details: {image: "/homework.png"},
  },
  {
    id: "r4",
    name: "Homework 2",
    type: "other",
    details: {image: "/homework.png"},
  }
];

const appointments = [
  {
    id: "a1",
    title: "Demonstrate simple interpolated animation of 3D",
    start: new Date("2025-12-14T00:01"),
    end: new Date("2025-12-14T10:00"),
    resourceId: "r1",
    order: 0,
    details: {},
  },
  {
    id: "a2",
    title: "Demo project homework 5 and test",
    start: new Date("2025-12-19T10:30"),
    end: new Date("2025-12-19T11:15"),
    resourceId: "r2",
    order: 1,
    details: {},
  },
  {
    id: "a3",
    title: "Study Group, Prepare for upcoming exam",
    start: new Date("2025-12-17T10:30"),
    end: new Date("2025-12-17T11:15"),
    resourceId: "r3",
    order: 1,
    details: {},
  },
];

export const PlanCard = () => {
  return (
		<Planner initialAppointments={appointments} initialResources={resources} />
   );
};
