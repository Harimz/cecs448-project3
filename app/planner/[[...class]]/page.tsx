import { Header } from "@/components/planner/header";
import { PlanCard } from "@/components/planner/plan-card";
import { PlannerCalander } from "@/components/planner/PlannerCalander";
import { WorkloadSummary } from "@/components/planner/WorkloadSummary";
import React from "react";

const Page = async ({ params }: { params: Promise<{ class: string[] }> }) => {
  const p = await params;
  const classTitle = p.class ? p.class[0].replace("%20", " ") : "";

  console.log(classTitle);

  return (
    <div className="w-[95%] mx-auto mt-6">
      <h3 className="text-lg font-semibold mb-4">Assignment Planner</h3>

      <PlanCard />

      <h3 className="text-lg font-semibold mb-4 mt-6">Workload Summary</h3>

      <WorkloadSummary />
    </div>
  );
};

export default Page;
