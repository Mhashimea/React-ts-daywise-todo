import { Avatar, Tag } from "antd"
import React from "react"

export default function TodaysMeetings() {
  return (
    <div className="todays-tasks bg-white rounded-xl border-gray-100 mt-3 p-3">
      <div className="flex items-center mb-3">
        <h1 className="flex-1 text-base font-semibold">Today's Meetings</h1>
        <a href="" className="text-xs text-primary">
          View all
        </a>
      </div>
      {[1, 2, 3, 4, 4].map(data => {
        return (
          <div className="todays-tasks-task flex pb-2 pt-2 border-b">
            <div className="overflow-hidden mr-3 flex-1">
              <h1 className="text-sm font-medium">Meeting With John Doe</h1>
              <a href="" className="text-blue-700">
                www.google.meet.com/?dfdh
              </a>
              <Tag color="geekblue" className="rounded-md">
                15.00 IST
              </Tag>
            </div>
            <div className="flex">
              <Avatar.Group>
                {[1, 2, 3, 5].map(item => {
                  return (
                    <Avatar
                      src={`https://i.pravatar.cc/150?img=${item}`}
                    ></Avatar>
                  )
                })}
              </Avatar.Group>
            </div>
          </div>
        )
      })}
    </div>
  )
}
