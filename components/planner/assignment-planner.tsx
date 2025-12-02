import { AlertCircle, EllipsisVertical, File, Smile } from "lucide-react";
import React from "react";
import { UserAvatar } from "../user-avatar";
import { GiNightSleep } from "react-icons/gi";

export const AssignmentPlanner = () => {
  const start = new Date(2025, 0, 10);
  const endDay = 22;

  const days = Array.from({ length: endDay - 10 + 1 }, (_, i) => {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    return {
      day: 10 + i,
      weekday: date.toLocaleDateString("en-US", { weekday: "short" }),
    };
  });

  return (
    <div className="mt-4 h-full bg-gray-50 p-2">
      <div className="flex gap-4 justify-between rounded-md">
        {days.map((d) => (
          <div key={d.day} className="text-cente p-4 text-center">
            <h1 className="text-[#219ebc] font-bold">{d.day}</h1>
            <p>{d.weekday}</p>
          </div>
        ))}
      </div>

      <div className="flex h-full">
        <div className="p-2 w-full rounded-md bg-white">
          <div className="flex translate-x-[5.5rem] justify-between bg-blue-500/25 p-4 rounded-md w-[32rem] border-[4px] border-blue-300">
            <div className="flex items-center gap-2">
              <File className="text-blue-500" />

              <div className="">
                <h1 className="font-bold text-sm">Project 3</h1>
                <p className="text-muted-foreground text-sm">
                  Demonstrate simple interpolated animation of 3D
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <UserAvatar />
              <EllipsisVertical className="size-4" />
            </div>
          </div>

          <div className="flex translate-x-[14rem] mt-2 justify-between bg-red-500/25 p-4 rounded-md w-[53rem] border-[4px] border-red-300">
            <div className="flex items-center gap-2">
              <AlertCircle className="text-red-500" />

              <div className="">
                <h1 className="font-bold text-sm">Homework 5</h1>
                <p className="text-muted-foreground text-sm">
                  Demo project homework 5 and test
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <UserAvatar />
              <EllipsisVertical className="size-4" />
            </div>
          </div>

          <div className="flex translate-x-[14rem] mt-2 justify-between bg-purple-500/25 p-4 rounded-md w-[42rem] border-[4px] border-purple-300">
            <div className="flex items-center gap-2">
              <GiNightSleep className="text-purple-500" />

              <div className="">
                <h1 className="font-bold text-sm">Study for Midterm II</h1>
                <p className="text-muted-foreground text-sm">
                  Study Group, Prepare for upcoming exam
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <UserAvatar />
              <EllipsisVertical className="size-4" />
            </div>
          </div>

          <div className="flex translate-x-[0rem] mt-2 justify-between bg-green-500/25 p-4 rounded-md w-[21.5rem] border-[4px] border-green-300">
            <div className="flex items-center gap-2">
              <Smile className="text-green-500" />

              <div className="">
                <h1 className="font-bold text-sm">Homework 2</h1>
                <p className="text-muted-foreground text-sm">
                  Draw lines using OpenGl
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <UserAvatar />
              <EllipsisVertical className="size-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
