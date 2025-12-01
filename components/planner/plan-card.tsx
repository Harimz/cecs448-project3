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
    id: "a1",
    name: "Project 3",
    type: "other",
    details: {image: "/homework.png"},
  },
  {
    id: "a2",
    name: "Homework 5",
    type: "other",
    details: {image: "/homework.png"},
  },
  {
    id: "a3",
    name: "Midterm II",
    type: "other",
    details: {image: "/homework.png"},
  },
  {
    id: "a4",
    name: "Study",
    type: "other",
    details: {image: "/homework.png"},
  }
];

const appointments = [
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

export const PlanCard = () => {
  return (
		<Planner initialAppointments={appointments} initialResources={resources} />
   );
};
