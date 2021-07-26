import { StarOutlined } from "@ant-design/icons";
import { Avatar, Select, Tooltip } from "antd";
import { get } from "lodash";
import * as React from "react";
import "./style.css";

const { Option } = Select;

interface KanbanBoardHeaderProps {
  projects: any;
  selectedProj: any;
}

export default function KanbanBoardHeader({
  projects,
  selectedProj,
}: KanbanBoardHeaderProps) {
  return (
    <div className="bg-white border border-gray-100 kanban-board-header p-2 rounded-md mb-5 flex items-center">
      <StarOutlined className="mr-2 cursor-pointer" />
      <div className="flex-1">
        <Select
          placeholder="Select Project"
          defaultValue={selectedProj.id}
          className="flex-1"
          style={{ width: 300 }}
        >
          {projects.map((proj) => {
            return <Option value={proj.id}>{proj.name}</Option>;
          })}
        </Select>
      </div>
      <div className="kanban-board-header-teams flex items-center">
        <Avatar.Group>
          {selectedProj.assignedUsers &&
            selectedProj.assignedUsers.length > 0 &&
            selectedProj.assignedUsers.map((user) => {
              return (
                <Tooltip title={get(user, "user.fullName")} placement="bottom">
                  <Avatar
                    src={get(user, "user.avatar")}
                    className="cursor-pointer"
                  >
                    <span>{get(user, "user.fullName").slice(0, 1)}</span>
                  </Avatar>
                </Tooltip>
              );
            })}
        </Avatar.Group>
      </div>
    </div>
  );
}
