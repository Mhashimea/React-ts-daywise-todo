import React from "react";
import img4 from "../../assets/images/icons/interview.png";
import img1 from "../../assets/images/icons/schedule.png";
import img2 from "../../assets/images/icons/shuttle.png";
import img3 from "../../assets/images/icons/trophy.png";
import ActivityChart from "./ActivityChart";
import Banner from "./Banner";
import ContributionChart from "./ContributionChart";
import DashboardCard from "./DashboardCard";
import ProjectStatus from "./ProjectStatus";
import "./style.css";
import TodaysTasks from "./TodaysTasks";

export default function Dashboard() {
  return (
    <div className="dashboard p-3">
      <div className="flex">
        <div className="w-2/3">
          <Banner />
          <ActivityChart />
        </div>
        <div className="w-1/3 ml-3 dashboard-quick-report">
          <div className="flex flex-wrap">
            <DashboardCard
              className="dashboard-quick-report-item"
              title="Open Projects"
              count={6}
              img={img2}
            />
            <DashboardCard
              className="dashboard-quick-report-item"
              title="Completed Tasks"
              count={500}
              img={img3}
            />
            <DashboardCard
              className="dashboard-quick-report-item"
              title="Pending Tasks"
              count={400}
              img={img1}
            />
            <DashboardCard
              className="dashboard-quick-report-item"
              title="Todays Meetings"
              count={10}
              img={img4}
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-2/3 mr-3">
          <TodaysTasks />
        </div>
        <div className="w-1/3">
          <ProjectStatus />
        </div>
      </div>
      <ContributionChart />
    </div>
  );
}
