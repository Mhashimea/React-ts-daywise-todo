import { PaperClipOutlined } from "@ant-design/icons";
import { Avatar, Modal, Select } from "antd";
import React from "react";
import { statusColor } from "../../util/common";
import ChildTask from "./ChildTasks";
import CommentBox from "./CommentBox";

const { Option } = Select;

interface TodoModalProps {
  visible: boolean;
  data?: any;
  onCancel?: () => void;
}

export default function TodoModal({ visible, data, onCancel }: TodoModalProps) {
  const generatestatuscolor = (status: string) => {
    const color =
      status === "Inprogress"
        ? statusColor.inProgress
        : status === "Completed"
        ? statusColor.success
        : status === "Pending"
        ? statusColor.pending
        : statusColor.danger;
    return color;
  };

  console.log(data);
  return (
    <div className="todo-modal">
      <Modal visible={visible} width="800px" footer={null} onCancel={onCancel}>
        <div className="todo-modal-header">
          <h1>{data.title}</h1>
          <Select className="mr-3" value={data.assignee}>
            <Option
              key="Muhammed Hashim Ea"
              value="Muhammed Hashim Ea"
              className="flex items-center"
            >
              <Avatar
                className="mr-2"
                size="small"
                src="https://i.pravatar.cc/150?img=43"
              ></Avatar>
              <span>Hashim Ea</span>
            </Option>
          </Select>
          <Select value={data.status}>
            <Option key="Pending" value="Pending">
              Pending
            </Option>
            <Option key="Inprogress" value="Inprogress">
              Inprogress
            </Option>
            <Option key="Completed" value="Completed">
              Completed
            </Option>
            <Option key="Closed" value="Closed">
              Closed
            </Option>
          </Select>
        </div>
        <p className="todo-modal-desc">{data.desc}</p>
        {data.subTasks && data.subTasks.length > 0 && (
          <ChildTask subTasks={data.subTasks} />
        )}

        <div className="todo-modal-comments">
          <CommentBox comments={data.comments} />
        </div>
      </Modal>
    </div>
  );
}
