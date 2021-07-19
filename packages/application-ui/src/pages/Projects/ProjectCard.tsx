import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Menu, Progress, Tooltip } from "antd";
import moment from "moment";
import React from "react";
import { colors } from "../../util/common";
import "./style.css";

interface ProjectCardProps {
  data?: any;
  classNames?: string;
}

export default function ProjectCard({ classNames, data }: ProjectCardProps) {
  const randomColor = Math.floor(Math.random() * colors.length);

  const generateProjStatus = (progress: number) => {
    if (progress < 30) return "exception";
    if (progress > 80) return "active";
  };

  const projectMenu = (
    <Menu>
      <Menu.Item key="All" className="flex items-center">
        <EyeOutlined />
        <span>View</span>
      </Menu.Item>
      <Menu.Item key="Inprogress" className="flex items-center">
        <EditOutlined />
        <span>Edit</span>
      </Menu.Item>
      <Menu.Item key="Completed" className="flex items-center">
        <DeleteOutlined />
        <span>Delete</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="project-card">
      <div className="flex items-center">
        <div className="flex-1">
          <Avatar
            size={"large"}
            shape="square"
            className="rounded-md"
            style={{ backgroundColor: colors[randomColor] || "#eee" }}
          >
            <span className="text-lg">{data.name.slice(0, 1)}</span>
          </Avatar>
        </div>

        <Dropdown overlay={projectMenu} trigger={["click"]}>
          <Button
            className="rounded-sm flex items-center border-none"
            size="small"
          >
            <MoreOutlined className="text-sm" />
          </Button>
        </Dropdown>
      </div>

      <div className="project-card-head mb-3">
        <h1>{data.name}</h1>
        <span>
          Created: {moment(data.createdAt).format("DD-MM-YYYY HH:mm")}
        </span>
      </div>
      <p>{data.description}</p>

      <Progress percent={55} status={generateProjStatus(55)} />

      <div className="border-t my-3"></div>
      <div className="text-right">
        <Avatar.Group
          className="flex-1"
          maxCount={8}
          maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
        >
          {data.assignedUsers.map((team: any) => {
            return (
              <Tooltip placement="bottom" title={team.user?.fullName}>
                <Avatar>
                  <span>{team.user?.fullName.slice(0, 1)}</span>
                </Avatar>
              </Tooltip>
            );
          })}
        </Avatar.Group>
      </div>
    </div>
  );
}
