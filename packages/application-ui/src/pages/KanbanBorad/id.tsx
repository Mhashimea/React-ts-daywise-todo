import { ClockCircleOutlined } from "@ant-design/icons";
import { Avatar, Tag } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DynamicEditForm from "../../components/todos/DynamicEditForm";
import { post } from "../../services/http-request";
import { UpdateTodos } from "../../store/actions/todos";
import { todoStatus } from "../../util/common";
import { generatestatuscolor } from "../../util/todo";
import Attachments from "./Attatchments";
import ChildTask from "./ChildTasks";
import CommentBox from "./CommentBox";
import "./style.css";

export default function TaskView() {
  const dispatch = useDispatch();
  const { id }: any = useParams();
  const teams = useSelector((state: any) => state.CommonReducer.teams);
  const priority = useSelector((state: any) => state.CommonReducer.priority);
  const [editForm, setEditForm] = useState("");
  const [data, setData] = useState<any>({});
  const comments = [
    {
      id: 1,
      user: {
        name: "Hashim Ea",
        avatar: "https://i.pravatar.cc/150?img=53",
      },
      date: "Yesterday at 2:33pm",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellat repellendus modi voluptatem atque ad, eos hic totam magnam!Quaerat fugit quis quae incidunt mollitia autem possimus a,voluptate natus?",
    },
    {
      id: 2,
      user: {
        name: "Nafeesa Ea",
        avatar: "https://i.pravatar.cc/150?img=13",
      },
      date: "Thursday at 2:33pm",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellat repelluptate natus?",
    },
    {
      id: 3,
      user: {
        name: "Sinan Ea",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
      date: "Monday at 2:33pm",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellat repelluptate natus?",
    },
    {
      id: 3,
      user: {
        name: "John doe",
        avatar: "https://i.pravatar.cc/150?img=55",
      },
      date: "Monday at 2:33pm",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellat repelluptate natus?",
      attachments: [
        {
          url: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "Image 1",
        },
        {
          name: "Image 2",
          url: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
      ],
    },
  ];
  const subTasks = [
    {
      id: 1,
      title: "Events page design research",
      status: "Pending",
      assignee: "Hashim Ea",
    },
    {
      id: 2,
      title: "Todo single view page UI design",
      status: "Inprogress",
      assignee: "Suhail Ea",
    },
  ];

  const updateTodo = async () => {
    await dispatch(UpdateTodos(data));
  };

  const onUpdateData = (e: any) => {
    Object.keys(e).map((key) => {
      data[key] = e[key];
    });
    updateTodo();
    setEditForm("");
  };

  const getData = async () => {
    const response = await post("todos", { id: id });
    if (response.data.length) setData(response.data[0]);
  };

  const saveChildTask = async (payload) => {
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="task-view">
      <div className="task-view-details">
        <div className="item-control mb-5 flex-1">
          <span className="text-gray-500 text-sm">Task Name</span>
          {editForm === "name" ? (
            <DynamicEditForm
              fieldType="INPUT"
              placeholder="Task Name"
              value={data.name}
              name="name"
              onSave={onUpdateData}
              onCancel={() => setEditForm("")}
            />
          ) : (
            <h1
              className="font-semibold text-lg cursor-text"
              onClick={() => setEditForm("name")}
            >
              {data.name}
            </h1>
          )}
        </div>
        <div className="item-control mb-5 mt-5">
          <span className="text-gray-500 text-sm">Description</span>
          {editForm === "description" ? (
            <DynamicEditForm
              fieldType="TEXTAREA"
              placeholder="Description"
              value={data.description}
              name="description"
              onSave={onUpdateData}
              onCancel={() => setEditForm("")}
            />
          ) : (
            <p
              className="cursor-text"
              onClick={() => setEditForm("description")}
            >
              {data.description}
            </p>
          )}
        </div>
        <div className="task-view-child">
          <ChildTask
            subTasks={data.childTodo}
            onSuccess={() => getData()}
            teams={teams}
          />
        </div>
        <div className="task-view-attatchments">
          <Attachments />
        </div>
        <div className="task-view-comments">
          <CommentBox comments={comments} />
        </div>
      </div>
      <div className="task-view-info">
        <div className="item-control flex items-center mb-5">
          <span className="text-gray-500 text-sm flex-1">Status</span>
          {editForm === "status" ? (
            <DynamicEditForm
              fieldType="SELECT"
              placeholder="Select status"
              name="status"
              options={todoStatus}
              defaultValue={data.status}
              onSave={onUpdateData}
              onCancel={() => setEditForm("")}
            />
          ) : (
            <Tag
              onClick={() => setEditForm("status")}
              className="mt-2 rounded-md"
              color={generatestatuscolor(data.status)}
            >
              {data.status}
            </Tag>
          )}
        </div>
        <div className="item-control flex items-center mb-5">
          <span className="text-gray-500 text-sm flex-1">Assigned To</span>
          {editForm === "assignee" ? (
            <DynamicEditForm
              fieldType="SELECT"
              placeholder="Select assignee"
              name="assignedTo"
              options={teams}
              optionValue={"fullName"}
              defaultValue={data.assignedTo}
              onSave={onUpdateData}
              onCancel={() => setEditForm("")}
            />
          ) : (
            <div className="flex items-center mt-2">
              <Avatar
                src="https://i.pravatar.cc/150?img=32"
                className="mr-2"
              ></Avatar>
              <span
                className="text-sm font-semibold"
                onClick={() => setEditForm("assignee")}
              >
                {data.user?.fullName}
              </span>
            </div>
          )}
        </div>
        <div className="item-control flex items-center mb-5">
          <span className="text-gray-500 text-sm flex-1">Due Date</span>
          {editForm === "due" ? (
            <DynamicEditForm
              fieldType="DATE"
              placeholder="Select date"
              value={data.date}
              name="date"
              onSave={onUpdateData}
              onCancel={() => setEditForm("")}
            />
          ) : (
            <div
              className="flex items-center mt-2"
              onClick={() => setEditForm("due")}
            >
              <ClockCircleOutlined className="mr-1" />
              <span className="text-sm font-semibold">
                {moment(data.date).format("DD-MM-YYYY")}
              </span>
            </div>
          )}
        </div>
        <div className="item-control flex items-center mb-5">
          <span className="text-gray-500 text-sm flex-1">Priority</span>
          {editForm === "priority" ? (
            <DynamicEditForm
              fieldType="SELECT"
              placeholder="Select priority"
              name="priority"
              options={priority}
              optionValue={null}
              defaultValue={data.priority}
              onSave={onUpdateData}
              onCancel={() => setEditForm("")}
            />
          ) : (
            <Tag
              className="mt-2 rounded-md capitalize"
              color={
                data.priority == "High"
                  ? "red"
                  : data.priority == "Medium"
                  ? "yellow"
                  : "blue"
              }
              onClick={() => setEditForm("priority")}
            >
              {data.priority}
            </Tag>
          )}
        </div>
        <div className="item-control flex items-center">
          <span className="text-gray-500 text-sm flex-1">Label</span>
          {editForm === "label" ? (
            <DynamicEditForm
              fieldType="INPUT"
              placeholder="Input your labels separated by commas "
              value={data.label}
              name="label"
              onSave={onUpdateData}
              onCancel={() => setEditForm("")}
            />
          ) : (
            <div className="flex flex-wrap">
              {data.label &&
                data.label.split(",").map((item: string) => {
                  return (
                    <Tag
                      onClick={() => setEditForm("label")}
                      className="mt-2 rounded-md"
                      color="processing"
                      key={item}
                    >
                      {item}
                    </Tag>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
