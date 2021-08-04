import {
  ApartmentOutlined,
  HomeOutlined,
  PaperClipOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Breadcrumb, Button, Modal, Select } from "antd";
import _ from "lodash";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { generaterandomcolor, todoWorkflow } from "../../util/common";
import ChildTask from "./ChildTasks";
import CommentBox from "./CommentBox";

const { Option } = Select;

interface TodoModalProps {
  visible: boolean;
  data?: any;
  onCancel?: () => void;
  onNavigate?: (data) => void;
}

export default function TodoModal({
  visible,
  data,
  onCancel,
  onNavigate,
}: TodoModalProps) {
  const teams = useSelector((state: any) => state.CommonReducer.teams);
  const currentUser = useSelector(
    (state: any) => state.AuthReducer.currentUser
  );

  const onNavigateItem = (e) => {
    if (onNavigate) onNavigate(e);
  };

  return (
    <div className="todo-modal">
      <Modal visible={visible} width="850px" footer={null} onCancel={onCancel}>
        <div className="todo-modal-header">
          <Select className="mr-3" defaultValue={data.assignedTo}>
            {teams.map((team) => {
              return (
                <Option
                  key={team.id}
                  value={team.id}
                  className="flex items-center"
                >
                  <Avatar
                    className="mr-2"
                    size="small"
                    src={team.avatar}
                    style={{ backgroundColor: generaterandomcolor() }}
                  >
                    <span>{_.get(team, "fullName").slice(0, 1)}</span>
                  </Avatar>
                  <span>{team.fullName}</span>
                </Option>
              );
            })}
          </Select>
          <Select defaultValue={data.status}>
            {todoWorkflow.map((wkfl) => {
              return (
                <Option key={wkfl} value={wkfl}>
                  {wkfl}
                </Option>
              );
            })}
          </Select>
        </div>
        <div className="todo-modal-breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item href="">
              <span>Kanban Board</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="cursor-pointer"
              onClick={() => onNavigateItem(data)}
            >
              <span>{data && data.name && data.name.slice(0, 5)}</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <h1 className="todo-modal-name">{data.name}</h1>
        <p className="todo-modal-desc">{data.description}</p>

        <div className="flex items-center justify-end mt-5">
          <Button className="rounded-md mr-2">
            <ApartmentOutlined />
            Add Child Tasks
          </Button>
          <Button className="rounded-md">
            <PaperClipOutlined />
            Attatch
          </Button>
        </div>
        {_.get(data, "childTodo", []).length > 0 && (
          <ChildTask subTasks={data.childTodo || []} />
        )}

        {_.get(data, "attachments", []).length > 0 && (
          <div className="todo-modal-attachments">
            <h1 className="text-base font-medium text-gray-500">Attachments</h1>
            {_.get(data, "attachments", []).map((atch) => {
              return (
                <div className="todo-modal-attachments-item">
                  <div>
                    <img src={atch.location} alt="" />
                  </div>
                  <span>
                    Created: {moment(atch.createdAt).format("DD MMMM, YYYY")}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {_.get(data, "comments", []).length > 0 && (
          <div className="todo-modal-comments">
            <CommentBox comments={data.comments} />
          </div>
        )}
      </Modal>
    </div>
  );
}
