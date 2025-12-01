import { Header } from "@/components/planner/header";
import { PlanCard } from "@/components/planner/plan-card";
import React from "react";

const Page = async ({ params }: { params: Promise<{ class: string[] }> }) => {
  const p = await params;
  const classTitle = p.class ? p.class[0].replace("%20", " ") : "";

  console.log(classTitle);

  return (
    <div className="w-[95%] mx-auto mt-6">
      <Header classTitle={classTitle} />

      <PlanCard />
    </div>
  );
};

export default Page;
