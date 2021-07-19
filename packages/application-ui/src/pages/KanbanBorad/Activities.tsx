import Avatar from "antd/lib/avatar/avatar";
import React, { useState } from "react";

export default function Activities() {
  const [activities, setActivities] = useState([
    {
      id: 1,
      profile: {
        name: "Muhammed Hashim Ea",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
      activity: "Created a task",
      time: "22 min ago",
      desc: "and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a docum",
    },
    {
      id: 2,
      profile: {
        name: "Rahma",
        avatar: "https://i.pravatar.cc/150?img=4",
      },
      activity: "Assigned the task to Sinan",
      time: "1 hour ago",
    },
    {
      id: 3,
      profile: {
        name: "Sinan",
        avatar: "https://i.pravatar.cc/150?img=24",
      },
      activity: "Changed the task 1025 to Completed",
      time: "2 hour ago",
    },
  ]);
  return (
    <div className="activities">
      <div className="activities-list">
        {activities.map((act) => {
          return (
            <div className="activities-list-item">
              <div className="mr-3">
                <Avatar src={act.profile.avatar}></Avatar>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <div className="activities-list-item-activity">
                    <p>
                      {act.profile.name} {act.activity}
                    </p>
                    <span>{act.time}</span>
                  </div>
                </div>
                {act.desc && <p className="description">{act.desc}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
