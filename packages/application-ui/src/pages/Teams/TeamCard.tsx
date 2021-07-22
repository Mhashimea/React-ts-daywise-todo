import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Tooltip, Avatar } from "antd";
import React from "react";

export default function TeamCard() {
  return (
    <div className="team-card">
      <div className="team-card-avatar">
        <Avatar
          shape="square"
          src="https://i.pravatar.cc/150?img=43"
          size="large"
        ></Avatar>
      </div>
      <div className="team-card-details">
        <h1>Muhammed Hashim Ea</h1>
        <span>Kerala, India</span>
      </div>
      <div className="team-card-social">
        <div className="team-card-social-item">
          <LinkedinOutlined />
        </div>
        <div className="team-card-social-item">
          <InstagramOutlined />
        </div>
        <div className="team-card-social-item">
          <FacebookOutlined />
        </div>
      </div>
      <div className="team-card-position">
        <span>Position</span>
        <h1 className="mb-3">Software Engineer</h1>
      </div>
      <div className="team-card-projects">
        <span className="flex-1">Projects</span>
        <Avatar.Group
          maxCount={4}
          maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
        >
          {[1, 2, 3, 5, 5, 6].map((item) => {
            return <Avatar>{`P${item}`}</Avatar>;
          })}
        </Avatar.Group>
      </div>
    </div>
  );
}
