import * as React from "react";
import { Select, Avatar, Tooltip } from "antd";
import "./style.css";
import { StarFilled, StarOutlined } from "@ant-design/icons";

const { Option } = Select;

export default function KanbanBoardHeader() {
  const projects = [
    "AWS Tutorial",
    "E-commmerce Web App",
    "Billing App",
    "JIRA Clone",
  ];
  return (
    <div className="bg-white border border-gray-100 kanban-board-header p-2 rounded-md mb-5 flex items-center">
      <StarOutlined className="mr-2 cursor-pointer" />
      <div className="flex-1">
        <Select
          placeholder="Select Project"
          defaultValue="E-commmerce Web App"
          className="flex-1"
          style={{ width: 300 }}
        >
          {projects.map((proj) => {
            return <Option value={proj}>{proj}</Option>;
          })}
        </Select>
      </div>
      <div className="kanban-board-header-teams flex items-center">
        <Avatar.Group>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((user) => {
            return (
              <Tooltip title="Ant User" placement="bottom">
                <Avatar
                  src={`https://i.pravatar.cc/150?img=${user}`}
                  className="cursor-pointer"
                />
              </Tooltip>
            );
          })}
        </Avatar.Group>
      </div>
    </div>
  );
}
