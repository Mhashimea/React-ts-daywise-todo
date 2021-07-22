import { PaperClipOutlined } from "@ant-design/icons";
import { Avatar, Modal, Select } from "antd";
import React from "react";
import { statusColor } from "../../util/common";

const { Option } = Select;

interface TodoModalProps {
  visible: boolean;
  data?: unknown;
  onCancel?: () => void;
}

export default function TodoModal({ visible, data, onCancel }: TodoModalProps) {
  const generatestatuscolor = (status: string) => {
    const color =
      status === "Pending"
        ? statusColor.pending
        : status === "Completed"
        ? statusColor.danger
        : statusColor.success;
    return color;
  };
  return (
    <div className="todo-modal">
      <Modal visible={visible} width="800px" footer={null} onCancel={onCancel}>
        <div className="todo-modal-header">
          <h1>Complete the app with mock design</h1>
          <Select className="mr-3">
            <Option
              key="In Progress"
              value="Pending"
              className="flex items-center"
            >
              <Avatar
                className="mr-2"
                size="small"
                src="https://i.pravatar.cc/150?img=43"
              ></Avatar>
              <span>Hashim Ea</span>
            </Option>
            <Option key="In Progress" value="Inprogress">
              InProgress
            </Option>
            <Option key="In Progress" value="Completed">
              Completed
            </Option>
            <Option key="In Progress" value="Closed">
              Closed
            </Option>
          </Select>
          <Select>
            <Option key="In Progress" value="Pending">
              Pending
            </Option>
            <Option key="In Progress" value="Inprogress">
              InProgress
            </Option>
            <Option key="In Progress" value="Completed">
              Completed
            </Option>
            <Option key="In Progress" value="Closed">
              Closed
            </Option>
          </Select>
        </div>
        <p className="todo-modal-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          eligendi harum impedit dolorem culpa rem vel voluptatibus, dolores
          aperiam accusantium molestiae totam adipisci velit itaque asperiores
          fugit, voluptatum inventore similique!tium molestiae totam adipisci
          velit itaque asperiores fugit, voluptatum inventore similique!
        </p>
        <div className="todo-modal-child">
          <div className="flex items-center my-5">
            <PaperClipOutlined className="mr-2 text-gray-500" />{" "}
            <h1 className="text-base font-medium text-gray-500">
              Child Tasks (5)
            </h1>
          </div>
          {[1, 1, 1, 1].map((items) => {
            return (
              <div className="todo-modal-child-item">
                <h1>1. Create event page</h1>
                <Avatar src="https://i.pravatar.cc/150?img=43" className="mr-4">
                  M
                </Avatar>
                <span style={{ color: `${generatestatuscolor("Pending")}` }}>
                  Pending
                </span>
              </div>
            );
          })}
        </div>
      </Modal>
    </div>
  );
}
