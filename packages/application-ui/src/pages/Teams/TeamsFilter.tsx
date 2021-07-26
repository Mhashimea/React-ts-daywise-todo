import React, { useState } from "react";
import { Input, Dropdown, Menu, Button, Popover } from "antd";
import { SearchOutlined, CaretDownOutlined } from "@ant-design/icons";

interface TeamsFilterProps {
  onChangeStatusFilter?: (value: any) => void;
  onAddNew?: () => void;
}

export default function TeamsFilter({
  onChangeStatusFilter,
  onAddNew,
}: TeamsFilterProps) {
  const [status, setStatus] = useState("All");

  const onChangeStatus = (e) => {
    setStatus(e.key);
    if (onChangeStatusFilter) onChangeStatusFilter(e.key);
  };

  const statusMenu = (
    <Menu onClick={onChangeStatus}>
      <Menu.Item key={"All"}>
        <a>All</a>
      </Menu.Item>
      <Menu.Item key="Active">
        <a>Active</a>
      </Menu.Item>
      <Menu.Item key="Inactive">
        <a>Inactive</a>
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
        <a className="ant-dropdown-link flex items-center text-gray-500 ">
          <span className="mr-2">{status}: </span>
          <CaretDownOutlined />
        </a>
      </Dropdown>

      <Button type="primary" className="rounded-md" onClick={onAddNew}>
        Add Team Member
      </Button>
    </div>
  );
}
