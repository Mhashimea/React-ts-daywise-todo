import React from "react"
import { Avatar, Tag } from "antd"

export default function TodaysTasks() {
  const tasks = [
    {
      title: "Setup Project with monorepo",
      priority: "High",
      project: "RadixHR",
      status: "Inprogress",
    },
    {
      title: "Install Prettier Eslint and Husky",
      priority: "High",
      project: "RadixHR",
      status: "Pending",
    },
    {
      title: "Setup Nodejs Server with typescript",
      priority: "High",
      project: "RadixHR",
      status: "Pending",
    },
    {
      title: "Install Sequelie ORM",
      priority: "Medium",
      project: "RadixHR",
      status: "Pending",
    },
  ]
  return (
    <div className="todays-tasks bg-white mt-3 border rounded-xl border-gray-100 p-5">
      <h1 className="flex-1 text-base font-semibold mb-5">Todays Tasks</h1>
      <div className="todays-tasks-head flex items-center mb-3 pb-3 border-b">
        <p className="w-2/4 font-semibold text-gray-500">Name</p>
        <p className="w-1/4 font-semibold text-gray-500">Priority</p>
        <p className="w-1/4 font-semibold text-gray-500">Project</p>
        <p className="w-1/4 font-semibold text-gray-500">Assigned By</p>
      </div>
      {tasks.map(item => {
        return (
          <div className="todays-tasks-items flex items-center mb-5">
            <h1 className="font-medium text-sm w-2/4">{item.title}</h1>
            <div className="w-1/4">
              <Tag
                className="rounded-md m-0"
                color={item.priority === "High" ? "#ee786c" : "yellow"}
              >
                {item.priority}
              </Tag>
            </div>
            <span className="w-1/4">{item.project}</span>
            <div className=" w-1/4 flex items-center">
              <Avatar
                size="small"
                src="https://i.pravatar.cc/150?img=43"
              ></Avatar>
              <h1 className="ml-2">Hashim Ea</h1>
            </div>
          </div>
        )
      })}
    </div>
  )
}
