import { MessageOutlined } from "@ant-design/icons";
import { Avatar, Button, Input } from "antd";
import React from "react";

interface CommentBoxProps {
  comments: any;
}

export default function CommentBox({ comments }: CommentBoxProps) {
  return (
    <div className="todo-comments">
      <div className="flex items-center my-5">
        <MessageOutlined className="mr-2 text-gray-500" />{" "}
        <h1 className="text-base font-medium text-gray-500">Comments</h1>
      </div>
      {comments &&
        comments.length > 0 &&
        comments.map((comm) => {
          return (
            <div className="todo-comments-item">
              <div className="mr-3">
                <Avatar src={comm.user.avatar}></Avatar>
              </div>
              <div className="todo-comments-item-data">
                <div className="flex items-center">
                  <h1 className="text-sm font-semibold mr-3">
                    {comm.user.name}
                  </h1>
                  <span className="text-gray-500 text-xs">{comm.date}</span>
                </div>
                <p className="text-gray-700">{comm.comment}</p>
                <div className="flex items-center">
                  {comm.attachments &&
                    comm.attachments.length > 0 &&
                    comm.attachments.map((items) => {
                      return (
                        <div className="todo-comments-item-attatchment">
                          <img src={items.url} alt="" />
                          <span>{items.name}</span>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          );
        })}
      <hr className="mb-5" />
      <div className="todo-comments-controller">
        <Avatar
          src={"https://i.pravatar.cc/150?img=14"}
          size={55}
          className="mr-3"
        ></Avatar>
        <Input.TextArea placeholder="Enter your comment here" />
        <div className="flex flex-col ml-2">
          <Button type="text" className="text-sm">
            Upload file
          </Button>
          <Button type="primary" size="small" className="text-sm rounded-md">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
