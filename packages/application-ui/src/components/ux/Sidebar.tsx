import {
  AreaChartOutlined,
  CheckCircleOutlined,
  FileTextOutlined,
  LogoutOutlined,
  UnorderedListOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar bg-primary h-full py-3">
      <div className="sidebar-profile text-center my-5">
        <Avatar
          src="https://i.pravatar.cc/150?img=32"
          size="large"
          className="mb-2"
        />
        <h1 className="text-white text-sm">Hashim Ea</h1>
        <span className="text-xs text-gray-200">Software Engineer</span>
      </div>
      <ul className="flex-1">
        <Link
          to="/dashboard"
          className={location.pathname === "/dashboard" ? " navbar-active" : ""}
        >
          <UnorderedListOutlined className="mr-2 text-sm" />
          <li>Dashboard</li>
        </Link>

        <Link
          to="/todos"
          className={location.pathname === "/todos" ? " navbar-active" : ""}
        >
          <CheckCircleOutlined className="mr-2 text-sm" />
          <li>Todos</li>
        </Link>

        <Link
          to="/projects"
          className={location.pathname === "/projects" ? "navbar-active" : ""}
        >
          <FileTextOutlined className="mr-2 text-sm" />
          <li>Projects</li>
        </Link>

        <Link
          to="/teams"
          className={location.pathname === "/teams" ? " navbar-active" : ""}
        >
          <UsergroupAddOutlined className="mr-2 text-sm" />
          <li>Teams</li>
        </Link>

        <Link
          to="/reports"
          className={location.pathname === "/reports" ? " navbar-active" : ""}
        >
          <AreaChartOutlined className="text-sm mr-2" />
          <li>Report</li>
        </Link>
      </ul>
      <div className="sidebar-link">
        <LogoutOutlined />
        Logout
      </div>
    </div>
  );
}
