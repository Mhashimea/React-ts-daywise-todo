import {
  ClockCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { Avatar, Button } from "antd";
import React from "react";

export default function MeetingDetails() {
  return (
    <div className="meeting-details">
      <h1>Daily Standup Tech Conferennce</h1>
      <p>
        <ClockCircleOutlined className="mr-2" /> 10:00 am - 12.30 pm | Starts in
        15 mins
      </p>
      <div className="hr"></div>
      <div className="meeting-details-control">
        <Button type="primary" className="rounded-lg">
          Join
        </Button>
        <Button type="default" className="rounded-lg">
          Copy Invitation
        </Button>
        <Button type="default" className="rounded-lg">
          <EditOutlined />
        </Button>
        <Button type="default" className="rounded-lg">
          <DeleteOutlined />
        </Button>
      </div>
      <div className="hr"></div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam fuga
        ducimus minima magni! Et aliquam optio odio. Suscipit impedit aut
        temporibus libero dolore, iusto commodi eius, delectus odio, ipsa nobis!
      </p>
      <div className="hr"></div>
      <div className="meeting-details-id">
        <p className="text-center">Meeting Id:</p>
        <h1>705 985 56588</h1>
      </div>
      <div className="hr"></div>
      <div className="meeting-details-participants">
        <p>Participants</p>
        <div className="flex items-center flex-wrap">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((user) => {
            return (
              <div className="meeting-details-participants-card">
                <Avatar
                  shape="square"
                  className="rounded-lg"
                  src={`https://i.pravatar.cc/150?img=${user}`}
                  size={40}
                ></Avatar>
                <h2>Hashim Ea</h2>
              </div>
            );
          })}
          <div className="meeting-details-participants-card meeting-details-participants-invite">
            <PlusSquareOutlined />
            <h2>Invite Member</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
