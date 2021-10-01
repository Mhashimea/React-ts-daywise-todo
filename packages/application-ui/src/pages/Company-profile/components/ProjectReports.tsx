import { Progress } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import DemoRingProgress from "../../../components/charts/RingChart";
import DynamicEditForm from "../../../components/todos/DynamicEditForm";
import "./style.css";

export default function ProjectReports() {
  const [editForm, setEditForm] = useState(false);
  const projects = useSelector((state: any) => state.CommonReducer.projects);
  const [filter, setFilter] = useState({ projectId: 8 });

  return (
    <div className="project-reports">
      <div className="project-reports-header">
        <h1>Project Reports</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          quos, laudantium, accusamus quam ipsa reprehenderit odit minima
          dolorem, quibusdam nisi eos a ad quaerat laborum odio deleniti
          similique reiciendis itaque!
        </p>
      </div>
      <div className="project-reports-details">
        <div className="relative flex items-center justify-end top-10">
          {editForm ? (
            <DynamicEditForm
              fieldType="SELECT"
              placeholder="Select Project"
              name="projectId"
              options={projects}
              onCancel={() => setEditForm(false)}
              defaultValue={filter.projectId}
            />
          ) : (
            <h2 onClick={() => setEditForm(true)}>JIRA Clone app</h2>
          )}
        </div>
        <div className="project-reports-details-chart">
          <div className="mr-5 flex flex-col items-center justify-center w-1/2">
            <DemoRingProgress />
            <p className="mt-2">80% Tasks are completed on this project</p>
          </div>
          <div className="w-1/2">
            <div className="project-reports-details-chart-item">
              <h1>Pending</h1>
              <Progress
                percent={10}
                strokeColor="#ee786c"
                trailColor="#dcdcdc"
              />
            </div>
            <div className="project-reports-details-chart-item">
              <h1>Inprogress</h1>
              <Progress
                percent={40}
                strokeColor="#ee786c"
                trailColor="#dcdcdc"
              />
            </div>
            <div className="project-reports-details-chart-item">
              <h1>Completed</h1>
              <Progress
                percent={30}
                strokeColor="#ee786c"
                trailColor="#dcdcdc"
              />
            </div>
            <div className="project-reports-details-chart-item">
              <h1>Closed</h1>
              <Progress
                percent={90}
                strokeColor="#ee786c"
                trailColor="#dcdcdc"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
