import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MediumOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Menu, Tooltip } from "antd";
import _ from "lodash";
import React from "react";
import { generaterandomcolor } from "../../util/common";

interface TeamsCardProps {
  data?: any;
}

export default function TeamCard({ data }: TeamsCardProps) {
  const teamMenu = (
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
    <div className="team-card">
      <div className="team-card-avatar">
        <div className="flex-1">
          <Avatar shape="square" src={data.avatar} size="large">
            <img
              className="h-full w-full"
              src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
              alt=""
            />
          </Avatar>
        </div>
        <Dropdown overlay={teamMenu} trigger={["click"]}>
          <Button
            className="rounded-sm flex items-center border-none"
            size="small"
          >
            <MoreOutlined className="text-sm" />
          </Button>
        </Dropdown>
      </div>
      <div className="team-card-details">
        <h1>{data.fullName}</h1>
        <span>{data.email}</span>
      </div>
      <div className="team-card-social">
        <div className="team-card-social-item">
          <LinkedinOutlined />
        </div>
        <div className="team-card-social-item">
          <InstagramOutlined />
        </div>
        <div className="team-card-social-item">
          <MediumOutlined />
        </div>
        <div className="team-card-social-item">
          <GithubOutlined />
        </div>
      </div>
      <div className="team-card-position">
        <span>Position</span>
        <h1 className="mb-3">{_.get(data, "designation.name", "---")}</h1>
      </div>
      <div className="team-card-projects">
        <span className="flex-1">Projects</span>
        {data.assignedProjects && data.assignedProjects.length > 0 ? (
          <Avatar.Group
            maxCount={4}
            maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
          >
            {data.assignedProjects.map((item) => {
              const projName = _.get(item, "project.name");
              return (
                <Tooltip title={projName} placement="top">
                  <Avatar style={{ backgroundColor: generaterandomcolor() }}>
                    <span>{projName && projName.slice(0, 1)}</span>
                  </Avatar>
                </Tooltip>
              );
            })}
          </Avatar.Group>
        ) : (
          <span className="text-xs text-gray-500">
            No Projects Were Assigned
          </span>
        )}
      </div>
    </div>
  );
}
