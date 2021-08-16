import { DeleteOutlined, MessageOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Upload } from "antd";
import _ from "lodash";
import moment from "moment";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

interface CommentBoxProps {
  comments: any;
  sendComment?: (values) => void;
}

export default function CommentBox({ comments, sendComment }: CommentBoxProps) {
  const { id }: any = useParams();
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState(null);
  const [comment, setComment] = useState("");

  const onChangeImage = (file, fileList) => {
    setImage(file);
    setImageUrl(URL.createObjectURL(file));
    return false;
  };

  const onSendComment = async () => {
    const payload = {
      todoId: id,
      text: comment,
      file: image,
    };
    if (sendComment) await sendComment(payload);
    setComment("");
    setImage(null);
  };

  return (
    <div className="todo-comments">
      <div className="flex items-center my-5">
        <MessageOutlined className="mr-2 text-gray-500" />{" "}
        <h1 className="text-base font-medium text-gray-500">
          Comments {comments.length > 0 && `(${comments.length})`}
        </h1>
      </div>
      {comments.map((cmt) => {
        const attatchments = _.get(cmt, "attatchments", []);
        return (
          <div className="todo-comments-item">
            <div className="mr-3">
              <Avatar src={_.get(cmt, "uploaded.avatar")}>
                <span>{_.get(cmt, "uploaded.fullName", "").slice(0, 1)}</span>
              </Avatar>
            </div>
            <div className="todo-comments-item-data">
              <div className="flex items-center">
                <h1 className="text-sm font-semibold mr-3">
                  {_.get(cmt, "uploaded.fullName")}
                </h1>
                <span className="text-gray-500 text-xs">
                  {moment(cmt.createdAt).format("DD-MM-YYY hh:mm A")}
                </span>
              </div>
              <p className="text-gray-700">{cmt.text}</p>
              <div className="flex items-center">
                {attatchments.map((items) => {
                  return (
                    <div className="todo-comments-item-attatchment">
                      <img src={items.location} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
      <hr className="mb-5" />
      {image && (
        <div className="todo-comments-docs">
          <DeleteOutlined
            className="todo-comments-docs-icon"
            onClick={() => setImage(null)}
          />
          <Avatar size={120} shape="square" src={imageUrl}></Avatar>
        </div>
      )}

      <div className="todo-comments-controller">
        <div>
          <Avatar
            src={"https://i.pravatar.cc/150?img=14"}
            size={55}
            className="mr-3"
          ></Avatar>
        </div>
        <Input.TextArea
          placeholder="Enter your comment here"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <div className="flex flex-col ml-2">
          <Upload showUploadList={false} beforeUpload={onChangeImage}>
            <Button size="small" className="mb-2" type="text">
              Upload Document
            </Button>
          </Upload>
          <Button
            type="primary"
            size="small"
            className="text-sm rounded-md"
            onClick={onSendComment}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
