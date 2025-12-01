"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Languages, MessageSquare, FilePenLine } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkloadCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
}

const WorkloadCard: React.FC<WorkloadCardProps> = ({
  title,
  description,
  icon,
  colorClass,
}) => {
  return (
    <Card className={cn("flex flex-col shadow-sm", colorClass)}>
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <div className="p-2 rounded-md bg-white/80 shadow-sm">{icon}</div>
        <CardTitle className="text-sm font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 pt-0">
        <p className="text-xs text-muted-foreground">{description}</p>
        <div className="flex flex-col gap-2 mt-2">
          <div className="h-12 bg-gray-200/80 rounded-md"></div>
          <div className="h-12 bg-gray-200/80 rounded-md"></div>
        </div>
      </CardContent>
    </Card>
  );
};

export const WorkloadSummary: React.FC = () => {
  return (
    <div className="mt-6 w-full">
      <h3 className="text-lg font-semibold mb-4">Workload Summary</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <WorkloadCard
          title="TRANSLATION ASSIGNMENTS"
          description="User workload with translation assignments"
          icon={<Languages className="h-5 w-5 text-blue-600" />}
          colorClass="bg-blue-50/80 border-blue-200"
        />
        <WorkloadCard
          title="REVIEW ASSIGNMENTS"
          description="User workload with review assignments"
          icon={<MessageSquare className="h-5 w-5 text-purple-600" />}
          colorClass="bg-purple-50/80 border-purple-200"
        />
        <WorkloadCard
          title="CONTRIBUTION ASSIGNMENTS"
          description="User workload with contribution assignments"
          icon={<FilePenLine className="h-5 w-5 text-pink-600" />}
          colorClass="bg-pink-50/80 border-pink-200"
        />
      </div>
    </div>
  );
};

