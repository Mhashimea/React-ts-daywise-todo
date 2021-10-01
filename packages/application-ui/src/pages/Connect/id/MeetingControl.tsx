import {
  AudioOutlined,
  FundProjectionScreenOutlined,
  MoreOutlined,
  PoweroffOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

export default function MeetingControl() {
  return (
    <div className="meeting-control">
      <Button type="default" className="rounded-md">
        <VideoCameraOutlined />
      </Button>
      <Button type="default" className="rounded-md">
        <AudioOutlined />
      </Button>
      <Button danger type="primary" className="rounded-md">
        <PoweroffOutlined />
        End Call
      </Button>
      <Button type="default" className="rounded-md">
        <FundProjectionScreenOutlined />
      </Button>
      <Button type="default" className="rounded-md">
        <MoreOutlined />
      </Button>
    </div>
  );
}
