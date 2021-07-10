import { Radio } from "antd";
import React from "react";
import WeeklyActivityChart from "../../components/charts/WeeklyActivityChart";

export default function ActivityChart() {
  return (
    <div className="dashboard-activity-chart bg-white mt-3 border rounded-xl border-gray-100 px-5 py-3">
      <div className="flex items-center mb-5">
        <h1 className="flex-1 text-base font-semibold">Activities</h1>
        <Radio.Group defaultValue="c" buttonStyle="solid">
          <Radio.Button value="a">Weekly</Radio.Button>
          <Radio.Button value="b">Annual</Radio.Button>
        </Radio.Group>
      </div>
      <WeeklyActivityChart />
    </div>
  );
}
