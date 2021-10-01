import {
  CalendarOutlined,
  HomeOutlined,
  LogoutOutlined,
  MessageOutlined,
  NotificationOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Dropdown, Input, Menu, Tooltip } from "antd";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";

const menu = (
  <Menu>
    <p>Notification Items</p>
  </Menu>
);

export default function Navbar() {
  const pageTitle = useSelector((state: any) => state.CommonReducer.pageTitle);

  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    window.location.reload();
  };

  return (
    <div className="navbar flex items-center px-5 py-3 border-b shadow-sm border-gray-300 bg-white sticky">
      <h1 className="text-xl font-semibold mr-5 capitalize">{pageTitle}</h1>
      <div className="flex-1">
        <Input placeholder="Search..." size="middle" className="rounded-lg" />
      </div>
      <div className="flex items-center text-primary mr-10 font-medium text-base">
        <CalendarOutlined className="mr-2 text-primary" />
        <span>{moment().format("MMMM DD, YYYY")}</span>
      </div>
      <div className="navbar-icons mr-5 cursor-pointer">
        <Tooltip overlay="Message" placement="bottom">
          <Link
            className={
              location.pathname === "/chat"
                ? "navbar-icons-item navbar-icons-item-active"
                : "navbar-icons-item"
            }
            to="/chat"
          >
            <MessageOutlined />
          </Link>
        </Tooltip>
        <Tooltip overlay="Company Profile" placement="bottom">
          <Link
            to="/company-profile"
            className={
              location.pathname === "/company-profile"
                ? "navbar-icons-item navbar-icons-item-active"
                : "navbar-icons-item"
            }
          >
            <HomeOutlined />
          </Link>
        </Tooltip>
        <Tooltip overlay="Settings" placement="bottom">
          <Link
            to="/settings"
            className={
              location.pathname === "/settings"
                ? "navbar-icons-item navbar-icons-item-active"
                : "navbar-icons-item"
            }
          >
            <SettingOutlined />
          </Link>
        </Tooltip>
        <Dropdown
          overlay={menu}
          trigger={["click"]}
          className="navbar-icons-item"
        >
          <div className="relative flex items-center">
            <NotificationOutlined />
          </div>
        </Dropdown>

        <Tooltip overlay="Logout" placement="bottom">
          <div className="navbar-icons-item" onClick={onLogout}>
            <LogoutOutlined />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
