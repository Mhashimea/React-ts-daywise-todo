import React from "react";
import { Avatar, Button } from "antd";

export default function ChatDetails() {
  return (
    <div className="chat-details">
      <div className="chat-details-header">
        <Avatar
          size={60}
          src="https://images.pexels.com/photos/3689532/pexels-photo-3689532.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ></Avatar>
        <h1>JIRA Project Group</h1>
      </div>
      <div className="chat-details-member">
        {[1, 2, 4, 5, 6, 7, 8].map((item) => {
          return (
            <Avatar
              className="mr-2 mb-2 border"
              size={40}
              src={`https://i.pravatar.cc/150?img=${item}`}
            ></Avatar>
          );
        })}
      </div>
      <div className="hr"></div>
      <div className="flex flex-col" style={{ height: "60%" }}>
        <div className="chat-details-gallery">
          <h1>Photos & Media</h1>
          {[11, 22, 44, 55, 66, 54, 53].map((item) => {
            return (
              <Avatar
                shape="square"
                size={55}
                className="rounded-md mr-1 mb-2 border"
                src={`https://i.pravatar.cc/150?img=${item}`}
              ></Avatar>
            );
          })}
        </div>
        <div className="chat-details-actions">
          <Button danger type="primary" className="rounded-md mb-2">
            Exit & Remove The Group
          </Button>
          <Button danger type="text" className="mb-2">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
