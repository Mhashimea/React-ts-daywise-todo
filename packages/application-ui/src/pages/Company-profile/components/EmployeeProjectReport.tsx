import { Progress } from "antd";
import React, { useState } from "react";

export default function EmployeeProjectReport() {
  const [employeeReport, setEmployeeReport] = useState([
    {
      id: 1,
      name: "Triston Mante",
      percentage: 15,
    },
    {
      id: 2,
      name: "Francesca King",
      percentage: 5,
    },
    {
      id: 3,
      name: "Maddison Borer",
      percentage: 55,
    },
    {
      id: 4,
      name: "Scot Waelchi",
      percentage: 69,
    },
    {
      id: 5,
      name: "Mr. Cara Goyette",
      percentage: 69,
    },
  ]);
  return (
    <div className="employee-report">
      <div className="employee-report-header">
        <h1>Employee Reports</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          quos, laudantium, accusamus quam ipsa reprehenderit odit minima
          dolorem, quibusdam nisi eos a ad quaerat laborum odio deleniti
          similique reiciendis itaque!
        </p>
      </div>
      <div className="employee-report-data">
        {employeeReport.map((emp) => {
          return (
            <div className="employee-report-data-item">
              <span>{emp.name}</span>
              <Progress
                percent={emp.percentage}
                strokeColor="#0f123f"
                trailColor="#dcdcdc"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
