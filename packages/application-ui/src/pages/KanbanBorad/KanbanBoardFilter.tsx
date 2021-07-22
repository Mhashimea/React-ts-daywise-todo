import React, { useState } from "react";
import { Input, Dropdown, Menu, Button, Popover } from "antd";
import { SearchOutlined, CaretDownOutlined } from "@ant-design/icons";
import Activities from "./Activities";

export default function KanbanBoardFilter() {
  const [activityVisible, setActivityVisible] = useState(false);
  const status = (
    <Menu>
      <Menu.Item>
        <a>Completed</a>
      </Menu.Item>
      <Menu.Item>
        <a>Inprogress</a>
      </Menu.Item>
      <Menu.Item>
        <a>Pending</a>
      </Menu.Item>
    </Menu>
  );
  const priority = (
    <Menu>
      <Menu.Item>
        <a>High</a>
      </Menu.Item>
      <Menu.Item>
        <a>Medium</a>
      </Menu.Item>
      <Menu.Item>
        <a>Low</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="page-filter flex items-center">
      <div className="flex-1">
        <Input
          placeholder="Search.."
          className="bg-transaprent border-none text-gray-500 w-1/3"
          prefix={<SearchOutlined className="site-form-item-icon" />}
        />
      </div>
      <Dropdown overlay={status} trigger={["click"]} className="mr-5">
        <a
          className="ant-dropdown-link flex items-center text-gray-500 "
          onClick={(e) => e.preventDefault()}
        >
          <span className="mr-2">Status: </span>
          <CaretDownOutlined />
        </a>
      </Dropdown>
      <Dropdown overlay={priority} trigger={["click"]} className="mr-5">
        <a
          className="ant-dropdown-link flex items-center text-gray-500"
          onClick={(e) => e.preventDefault()}
        >
          <span className="mr-2">Priority: </span>
          <CaretDownOutlined />
        </a>
      </Dropdown>
      <Popover
        content={<Activities />}
        trigger="click"
        visible={activityVisible}
        onVisibleChange={() => setActivityVisible(!activityVisible)}
      >
        <Button className="rounded-md mr-2">Activities</Button>
      </Popover>
      <Button type="primary" className="rounded-md">
        Add New Item
      </Button>
    </div>
  );
}