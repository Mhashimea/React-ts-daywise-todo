import {
  AntDesignOutlined,
  CalendarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Checkbox, Tag, Tooltip, Avatar, Progress } from "antd";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

export default function TodoCard({ data, onChangeTodo, isChild }: any) {
  return (
    <div className="bg-white border  p-4 rounded-md todo-card mb-3">
      <div className="flex items-start">
        <Checkbox
          onChange={(evt) => onChangeTodo(evt, data)}
          checked={data.status === "COMPLETED"}
        ></Checkbox>
        <div className="flex items-start ml-2 w-full">
          <div className="flex-1">
            <Link
              to={"/todos/" + data.id}
              className="text-base font-semibold mb-1 cursor-pointer"
            >
              {data.name}
            </Link>
            <p className="text-xs text-gray-600">{data.description}</p>
          </div>
          <div className="flex items-center flex-wrap">
            {data.label.split(",").map((item: string) => {
              return (
                <Tag className="mt-2 rounded-md" color="#0f123f">
                  {item}
                </Tag>
              );
            })}
            <Tag className="rounded-md capitalize" color="red">
              {data.priority} Priority
            </Tag>
          </div>
        </div>
      </div>
      {!isChild && (
        <div className="mt-3 ml-5 flex items-center justify-between">
          <Avatar.Group
            maxCount={2}
            maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
          >
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
            <Tooltip title="Ant User" placement="top">
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
            </Tooltip>
            <Avatar
              style={{ backgroundColor: "#1890ff" }}
              icon={<AntDesignOutlined />}
            />
          </Avatar.Group>

          <span className="flex items-center">
            <CalendarOutlined className="mr-1" />
            {moment(data.date).format("DD-MM-YYYY")}
          </span>
          <span className="flex items-center">
            <UserOutlined className="mr-1" />
            {data.user?.fullName}
          </span>
          <div className="w-1/5">
            <Progress percent={30} />
          </div>
          <div className="flex items-center">
            <Avatar>
              <span>{data.project?.name.slice(0, 1)}</span>
            </Avatar>
            <h1 className="ml-2 font-medium">{data.project?.name}</h1>
          </div>
        </div>
      )}
    </div>
  );
}
