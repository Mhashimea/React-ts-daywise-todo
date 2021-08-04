import { PaperClipOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import _ from "lodash";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DynamicEditForm from "../../components/todos/DynamicEditForm";
import { AddTodos } from "../../store/actions/todos";
import { generaterandomcolor, todoStatus } from "../../util/common";
import { generatestatuscolor } from "../../util/todo";

interface ChildTasksProps {
  subTasks?: any;
  onSuccess?: () => void;
  teams?: any[];
}

export default function ChildTask({
  subTasks,
  onSuccess,
  teams,
}: ChildTasksProps) {
  const { id }: any = useParams();
  const [editForm, setEditForm] = useState("");
  const dispatch = useDispatch();

  const onUpdateData = async (e) => {
    const payload = e;
    payload.todoId = Number(id);
    const response: any = await dispatch(AddTodos(payload));
    if (response.success && onSuccess) {
      setEditForm("");
      onSuccess();
    }
  };
  return (
    <div className="todo-modal-child">
      <div className="flex items-center my-5 ">
        <div className="flex items-center flex-1">
          <PaperClipOutlined className="mr-2 text-gray-500" />
          <h1 className="text-base font-medium text-gray-500">
            Child Tasks {subTasks && `(${subTasks.length})`}
          </h1>
        </div>
        <Button
          size="small"
          className="rounded-md"
          onClick={() => setEditForm("childTask")}
        >
          Add Child Task
        </Button>
      </div>

      {editForm === "childTask" && (
        <DynamicEditForm
          fieldType="INPUT"
          placeholder="Task Name"
          value=""
          name="name"
          onSave={(e) => onUpdateData({ ...e, status: "Inprogress" })}
          onCancel={() => setEditForm("")}
          wrapperClass="mt-6 mb-3"
        />
      )}

      {subTasks && subTasks.length === 0 && (
        <p className="text-center text-gray-500 my-10">
          No Child Tasks Found...
        </p>
      )}

      {subTasks &&
        subTasks.length > 0 &&
        subTasks.map((items, index) => {
          const assignedTo = _.get(items, "user.fullName");
          return (
            <div className="todo-modal-child-item">
              <h1>
                {index + 1}. {items.name}
              </h1>
              {editForm === `assignedTo${index}` && (
                <DynamicEditForm
                  fieldType="SELECT"
                  placeholder="Select assignee"
                  name="assignedTo"
                  options={teams}
                  optionValue={"fullName"}
                  defaultValue={items.assignedTo}
                  onSave={(data) => onUpdateData({ ...items, ...data })}
                  onCancel={() => setEditForm("")}
                />
              )}
              {editForm !== `assignedTo${index}` && (
                <div onClick={() => setEditForm(`assignedTo${index}`)}>
                  {items.assignedTo ? (
                    <Avatar
                      className="mr-4"
                      src={_.get(items, "user.avatar")}
                      style={{ backgroundColor: generaterandomcolor() }}
                    >
                      <span className="avatar-text text-base relative">
                        {assignedTo.slice(0, 1)}
                      </span>
                    </Avatar>
                  ) : (
                    <span>No assignee</span>
                  )}
                </div>
              )}

              {editForm === `status${index}` ? (
                <DynamicEditForm
                  fieldType="SELECT"
                  placeholder="Select status"
                  name="status"
                  options={todoStatus}
                  defaultValue={items.status}
                  onSave={(data) => onUpdateData({ ...items, ...data })}
                  onCancel={() => setEditForm("")}
                />
              ) : (
                <span
                  style={{ color: `${generatestatuscolor(items.status)}` }}
                  onClick={() => setEditForm(`status${index}`)}
                >
                  {items.status}
                </span>
              )}
            </div>
          );
        })}
    </div>
  );
}
