import { PictureOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";

export default function Attachments() {
  return (
    <div className="attatchments">
      <div className="flex items-center">
        <PictureOutlined className="mr-2 text-gray-500" />
        <h1 className="text-base font-medium text-gray-500">
          Attachments (15)
        </h1>
      </div>
      <div className="attatchments-list">
        {Array.from(Array(15), (i) => {
          return (
            <div className="attatchments-list-item">
              <Avatar
                shape="square"
                size={220}
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              ></Avatar>
              <h1>Uploaded By: Muhammed Hashim Ea</h1>
              <p>Uploaded On: 25/02/2020</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
