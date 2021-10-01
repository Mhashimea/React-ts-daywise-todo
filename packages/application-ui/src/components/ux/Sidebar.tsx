import {
  AreaChartOutlined,
  BuildOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  FileTextOutlined,
  LogoutOutlined,
  UnorderedListOutlined,
  UsergroupAddOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import _ from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { SetPageTitle } from "../../store/actions/common";
import "./style.css";

export default function Sidebar() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state: any) => state.AuthReducer.currentUser
  );

  const setPageTitle = (title: string, url?: string) => {
    dispatch(SetPageTitle(title));
    if (url) history.push("/" + url);
  };

  const setInitialPageTitle = () => {
    const currentRoute = location.pathname.split("/")[1];
    if (currentRoute === "kanban-board") setPageTitle("Board");
    else {
      setPageTitle(currentRoute);
    }
  };

  useEffect(() => {
    setInitialPageTitle();
  }, []);

  return (
    <div className="sidebar bg-primary h-full py-3">
      <div className="sidebar-profile text-center my-5">
        <Avatar
          src="https://i.pravatar.cc/150?img=32"
          size="large"
          className="mb-2"
        />
        <h1 className="text-white text-sm">{_.get(currentUser, "fullName")}</h1>
        <span className="text-xs text-gray-200">
          {_.get(currentUser, "designation.name")}
        </span>
      </div>
      <ul className="flex-1">
        <a
          className={location.pathname === "/dashboard" ? " navbar-active" : ""}
          onClick={() => setPageTitle("Dashboard", "dashboard")}
        >
          <UnorderedListOutlined className="mr-2 text-sm" />
          <li>Dashboard</li>
        </a>

        <a
          className={
            location.pathname === "/kanban-board" ? " navbar-active" : ""
          }
          onClick={() => setPageTitle("Board", "kanban-board")}
        >
          <CheckCircleOutlined className="mr-2 text-sm" />
          <li>Board</li>
        </a>

        <a
          className={location.pathname === "/projects" ? "navbar-active" : ""}
          onClick={() => setPageTitle("Projects", "projects")}
        >
          <FileTextOutlined className="mr-2 text-sm" />
          <li>Projects</li>
        </a>

        <a
          className={location.pathname === "/teams" ? " navbar-active" : ""}
          onClick={() => setPageTitle("Teams", "teams")}
        >
          <UsergroupAddOutlined className="mr-2 text-sm" />
          <li>Teams</li>
        </a>
        <a
          className={location.pathname === "/connect" ? " navbar-active" : ""}
          onClick={() => setPageTitle("Connect", "connect")}
        >
          <VideoCameraAddOutlined className="mr-2 text-sm" />
          <li>Connect</li>
        </a>
        <a
          className={location.pathname === "/reports" ? " navbar-active" : ""}
          onClick={() => setPageTitle("Reports", "reports")}
        >
          <AreaChartOutlined className="text-sm mr-2" />
          <li>Reports</li>
        </a>
      </ul>
    </div>
  );
}
