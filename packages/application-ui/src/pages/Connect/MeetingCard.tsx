import { ClockCircleOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import classNames from "classnames";
import React from "react";
import { useState } from "react";

export default function MeetingCard({ index }) {
  const [selectedIndex, setSelectedIndex] = useState(2);

  const MeetingCardCls = classNames({
    "meeting-card": true,
    "active-card": index === selectedIndex,
  });
  return (
    <div className={MeetingCardCls}>
      <h1>Design Daily Meeting</h1>
      <p>
        <ClockCircleOutlined className="mr-2" /> 10:00 am - 12.30 pm | Starts in
        15 mins
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo corporis
        eum quod ex quaerat vero illum ab! Consectetur distinctio rem totam,
        autem nemo, iste pariatur, repellendus consequuntur hic ab recusandae!
      </p>
      <div className="meeting-card-footer">
        {[1, 2, 3, 5, 45, 58, 24].map((user) => {
          return (
            <Avatar
              shape="square"
              className="rounded-md mr-1"
              src={`https://i.pravatar.cc/150?img=${user}`}
            ></Avatar>
          );
        })}
        <div className="flex-1"></div>
        <Button className="rounded-md" type="link">
          Copy Link
        </Button>
        <Button className="rounded-lg" type="primary">
          Join
        </Button>
      </div>
    </div>
  );
}
