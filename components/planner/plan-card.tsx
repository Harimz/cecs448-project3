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
import { Button } from "../ui/button";
import { Assignment } from "./assignment";
import { ScrollArea } from "../ui/scroll-area";

export const PlanCard = () => {
  return (
    <div className="rounded-md w-full shadow-sm p-4 flex gap-6 h-[30rem]">
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
          <Assignment name="Project 3" />
          <Assignment name="Homework 5" />
          <Assignment name="Midterm II" />
          <Assignment name="Study" />
        </ScrollArea>
      </div>

      <div className="w-full">
        <div className="flex items-center justify-between">
          <X className="size-4" />

          <div className="flex gap-12">
            <div className="flex items-center gap-4">
              <Button className="bg-[#219ebc] hover:bg-[#219ebc]/75 cursor-pointer">
                Create
              </Button>

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
    </div>
  );
};
