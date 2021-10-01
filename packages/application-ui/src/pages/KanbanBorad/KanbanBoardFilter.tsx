import React, { useState } from "react";
import { Input, Dropdown, Menu, Button, Popover } from "antd";
import { SearchOutlined, CaretDownOutlined } from "@ant-design/icons";
import Activities from "./Activities";

interface KanbanBoardFilterProps {
  onChangeStatus?: (value: any) => void;
  onChangePriority?: (value: any) => void;
  onAddNew?: () => void;
  activities?: any[];
}

export default function KanbanBoardFilter({
  onChangePriority,
  onChangeStatus,
  onAddNew,
  activities,
}: KanbanBoardFilterProps) {
  const [activityVisible, setActivityVisible] = useState(false);
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");

  const changeStatus = (e) => {
    setStatus(e.key);
    if (onChangeStatus) onChangeStatus(e.key);
  };

  const changePriority = (e) => {
    setPriority(e.key);
    if (onChangePriority) onChangePriority(e.key);
  };

  const statusMenu = (
    <Menu onClick={changeStatus}>
      <Menu.Item key="All">
        <a>All</a>
      </Menu.Item>
      <Menu.Item key="Todo">
        <a>Todo</a>
      </Menu.Item>
      <Menu.Item key="Inprogress">
        <a>Inprogress</a>
      </Menu.Item>
      <Menu.Item key="Completed">
        <a>Completed</a>
      </Menu.Item>
      <Menu.Item key="Closed">
        <a>Closed</a>
      </Menu.Item>
    </Menu>
  );
  const priorityMenu = (
    <Menu onClick={changePriority}>
      <Menu.Item key="All">
        <a>All</a>
      </Menu.Item>
      <Menu.Item key="High">
        <a>High</a>
      </Menu.Item>
      <Menu.Item key="Medium">
        <a>Medium</a>
      </Menu.Item>
      <Menu.Item key="Low">
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
      <Dropdown overlay={statusMenu} trigger={["click"]} className="mr-5">
        <a
          className="ant-dropdown-link flex items-center text-gray-500 "
          onClick={(e) => e.preventDefault()}
        >
          <span className="mr-2">{status}: </span>
          <CaretDownOutlined />
        </a>
      </Dropdown>
      <Dropdown overlay={priorityMenu} trigger={["click"]} className="mr-5">
        <a
          className="ant-dropdown-link flex items-center text-gray-500"
          onClick={(e) => e.preventDefault()}
        >
          <span className="mr-2">{priority}: </span>
          <CaretDownOutlined />
        </a>
      </Dropdown>
      <Popover
        content={<Activities activities={activities} />}
        trigger="click"
        visible={activityVisible}
        onVisibleChange={() => setActivityVisible(!activityVisible)}
      >
        <Button className="rounded-md mr-2">Activities</Button>
      </Popover>
      <Button type="primary" className="rounded-md" onClick={onAddNew}>
        Add New Item
      </Button>
    </div>
  );
}
