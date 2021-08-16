import { CalendarOutlined, NotificationOutlined } from "@ant-design/icons";
import { Dropdown, Input, Menu } from "antd";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

const menu = (
  <Menu>
    <p>Notification Items</p>
  </Menu>
);

export default function Navbar() {
  const pageTitle = useSelector((state: any) => state.CommonReducer.pageTitle);
  return (
    <div className="navbar flex items-center px-5 py-3 border-b shadow-sm border-gray-300 mb-3 bg-white sticky">
      <h1 className="text-xl font-semibold mr-5 capitalize">{pageTitle}</h1>
      <div className="flex-1">
        <Input placeholder="Search..." size="middle" className="rounded-lg" />
      </div>
      <div className="flex items-center text-primary mr-10 font-medium text-base">
        <CalendarOutlined className="mr-2 text-primary" />
        <span>{moment().format("MMMM DD, YYYY")}</span>
      </div>
      <div className="navbar-notification mr-5 cursor-pointer">
        <Dropdown overlay={menu} trigger={["click"]}>
          <div className="relative flex items-center">
            <NotificationOutlined />
            <span className="new-msg absolute h-2 w-2 rounded-full right-0 left-2 bottom-3 bg-red-700"></span>
          </div>
        </Dropdown>
      </div>
    </div>
  );
}
