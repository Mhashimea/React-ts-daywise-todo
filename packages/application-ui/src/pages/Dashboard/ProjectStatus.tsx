import { Progress } from "antd";
import React from "react";

export default function ProjectStatus() {
  const projects = [
    {
      name: "RadixHR",
      tasksCompleted: 256,
      totalTasks: 500,
      percentage: 50,
    },
    {
      name: "RadixDB",
      tasksCompleted: 56,
      totalTasks: 250,
      color: "#ee786c",
      percentage: 20,
    },
    {
      name: "RadixConnect",
      tasksCompleted: 576,
      totalTasks: 1580,
      percentage: 95,
    },
  ];
  return (
    <div className="project-status bg-white mt-3 border rounded-xl border-gray-100 p-5">
      <h1 className="flex-1 text-base font-semibold mb-5">Project Status</h1>
      <div className="project-status-items">
        {projects.map((proj) => {
          return (
            <div className="project-status-items-data mb-4">
              <h1 className="font-medium">{proj.name}</h1>
              <p className="text-sm text-gray-500">
                {proj.tasksCompleted} Completed Out Of {proj.totalTasks}
              </p>
              <Progress
                percent={proj.percentage}
                status={
                  proj.percentage < 30
                    ? "exception"
                    : proj.percentage > 30
                    ? "normal"
                    : proj.percentage > 50
                    ? "active"
                    : proj.percentage >= 90
                    ? "success"
                    : "success"
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
