import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  MoreOutlined,
} from "@ant-design/icons"
import { Avatar, Button, Card, Dropdown, Menu, Tag, Tooltip } from "antd"
import moment from "moment"
import React from "react"

interface ProjectCardProps {
  data?: any
  classNames?: string
}

export default function ProjectCard({ classNames, data }: ProjectCardProps) {
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
  )
  return (
    <Card
      className={"project-card rounded-md mr-2 mb-2 shadow-md" + classNames}
    >
      <div className="flex items-center border-b pb-2 mb-2">
        <div className="flex-1 mr-2">
          <h1 className="text-base font-semibold truncate">{data.name}</h1>
          <span className="text-sm text-gray-500">45 tasks are completed</span>
        </div>
        <Tag color="yellow" className="uppercase">
          {data.status}
        </Tag>
      </div>
      <p className="text-sm text-gray-600 my-3">{data.description}</p>
      <div className="flex items-start my-3">
        <div className="flex-1">
          <span className="text-sm text-gray-500">Created Date</span>
          <p className="font-semibold">
            {data.user?.fullName} <br />{" "}
            {moment(data.createdAt).format("DD-MM-YYYY HH:mm A")}
          </p>
        </div>
        <div>
          <span className="text-sm text-gray-500">Start Date</span>
          <p className="font-semibold">
            {moment(data.startDate).format("DD-MM-YYYY")}
          </p>
        </div>
      </div>
      <div className="border-t pt-3 flex items-center">
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
            )
          })}
        </Avatar.Group>
        <Dropdown overlay={projectMenu} trigger={["click"]}>
          <Button className="rounded-md flex items-center">
            <MoreOutlined className="text-sm" />
          </Button>
        </Dropdown>
      </div>
    </Card>
  )
}
