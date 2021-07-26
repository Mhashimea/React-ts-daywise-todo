import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Menu } from "antd";
import React, { useState } from "react";
import { projectStatus } from "../../util/common";
interface ProjectFilterProps {
  onChangeStatusFilter?: (value: any) => void;
  onAddNew?: () => void;
}

export default function ProjectFilter({
  onChangeStatusFilter,
  onAddNew,
}: ProjectFilterProps) {
  const [status, setStatus] = useState("All");

  const onChangeStatus = (e) => {
    setStatus(e.key);
    if (onChangeStatusFilter) onChangeStatusFilter(e.key);
  };

  const projectMenu = (
    <Menu onClick={onChangeStatus}>
      <Menu.Item key="All">
        <a>All</a>
      </Menu.Item>
      {projectStatus.map((status) => {
        return (
          <Menu.Item key={status}>
            <a>{status}</a>
          </Menu.Item>
        );
      })}
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
      <Dropdown overlay={projectMenu} trigger={["click"]} className="mr-5">
        <a
          className="ant-dropdown-link flex items-center text-gray-500 "
          onClick={(e) => e.preventDefault()}
        >
          <span className="mr-2">{status}: </span>
          <CaretDownOutlined />
        </a>
      </Dropdown>

      <Button type="primary" className="rounded-md" onClick={onAddNew}>
        Add New Project
      </Button>
    </div>
  );
}
