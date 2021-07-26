import { PaperClipOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";
import { generateStatusColor } from "../../util/todo";

interface ChildTasksProps {
  subTasks?: any;
}

export default function ChildTask({ subTasks }: ChildTasksProps) {
  return (
    <div className="todo-modal-child">
      <div className="flex items-center my-5">
        <PaperClipOutlined className="mr-2 text-gray-500" />{" "}
        <h1 className="text-base font-medium text-gray-500">
          Child Tasks ({subTasks.length})
        </h1>
      </div>
      {subTasks.map((items, index) => {
        return (
          <div className="todo-modal-child-item">
            <h1>
              {index + 1}. {items.title}
            </h1>
            <Avatar
              src={`https://i.pravatar.cc/150?img=${index}`}
              className="mr-4"
            >
              {items.assignee.slice(0, 1)}
            </Avatar>
            <span style={{ color: `${generateStatusColor(items.status)}` }}>
              {items.status}
            </span>
          </div>
        );
      })}
    </div>
  );
}
