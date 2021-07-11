import { ClockCircleOutlined } from "@ant-design/icons";
import { Avatar, Checkbox, Input, Modal, Progress, Tag } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Default from "../../components/layouts/Default";
import DynamicEditForm from "../../components/todos/DynamicEditForm";
import Header from "../../components/ux/Header";
import TodoCard from "../../components/ux/TodoCard";
import { post } from "../../services/http-request";
import { AddTodos, UpdateTodos } from "../../store/actions/todos";
import AddTodoForm from "../../components/forms/AddTodoForm";

export default function TodoView() {
  const dispatch = useDispatch();
  const { id }: any = useParams();
  const [data, setData] = useState<any>({});
  const [editForm, setEditForm] = useState("");
  const [modal, setModal] = useState(false);

  const teams = useSelector((state: any) => state.CommonReducer.teams);
  const projects = useSelector((state: any) => state.CommonReducer.projects);
  const priority = useSelector((state: any) => state.CommonReducer.priority);
  console.log(priority);

  const getData = async () => {
    const response = await post("todos", { id: id });
    if (response.data.length) setData(response.data[0]);
  };

  const updateTodo = async () => {
    await dispatch(UpdateTodos({ payload: data }));
  };

  const onUpdateData = (e: any) => {
    Object.keys(e).map((key) => {
      data[key] = e[key];
    });
    updateTodo();
    setEditForm("");
  };

  const onUpdateTodo = async (evt: any, data: any) => {
    const checked = evt.target.checked;
    data["status"] = checked ? "COMPLETED" : "INPROGRESS";
    await dispatch(UpdateTodos({ payload: data }));
  };

  const saveTodo = async (payload: { todoId: null }) => {
    payload.todoId = data.id;
    const response: any = await dispatch(AddTodos({ payload: payload }));
    if (response.success) {
      setModal(false);
      getData();
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Default>
      <Header
        title="Todos"
        buttonText="Add Child Todo"
        onClick={() => setModal(true)}
      />
      <div className="todos-view-wrapper flex mt-5">
        <div className="todos-view__details w-3/4">
          <div className="flex items-center">
            <div className="item-control flex-1">
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
            <Checkbox
              className="border p-2 rounded-md"
              checked={data.status === "COMPLETED"}
            >
              Mark as completed
            </Checkbox>
          </div>
          <div className="flex items-center my-10 justify-between">
            <div className="item-control">
              <span className="text-gray-500 text-sm">Assigned To</span>
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
            <div className="item-control">
              <span className="text-gray-500 text-sm">Due Date</span>
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
            <div className="item-control flex flex-col">
              <span className="text-gray-500 text-sm">Priority</span>
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
            <div className="item-control flex flex-col">
              <span className="text-gray-500 text-sm">Label</span>
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
          <div className="my-10">
            <div className="item-control">
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
          </div>

          <div className="my-10">
            <div className="item-control w-full mb-3">
              <span className="text-gray-500 text-sm">Child Todos</span>
              <Progress percent={30} />
            </div>
            {data.childTodo &&
              data.childTodo.map((item: any, key: number) => {
                return (
                  <TodoCard
                    data={item}
                    isChild={true}
                    key={key}
                    onChangeTodo={onUpdateTodo}
                  />
                );
              })}
          </div>
          <div className="my-10">
            <span className="text-gray-500 text-sm">Comments</span>
            <div className="comments mt-4">
              {Array.from(Array(5), (e, i) => {
                return (
                  <div className="flex items-start mb-5">
                    <div>
                      <Avatar
                        src={"https://i.pravatar.cc/150?img=" + i}
                        size={35}
                      ></Avatar>
                    </div>
                    <div className="ml-2">
                      <div className="flex items-center mb-2">
                        <h1 className="text-sm font-semibold mr-3">
                          Muhammed Hashim Ea
                        </h1>
                        <span className="text-gray-500 text-xs">
                          Yesterday at 3.24pm
                        </span>
                      </div>
                      <p className="text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cum repellat repellendus modi voluptatem atque ad, eos
                        hic totam magnam! Quaerat fugit quis quae incidunt
                        mollitia autem possimus a, voluptate natus?
                      </p>
                    </div>
                  </div>
                );
              })}
              <hr className="mb-5" />
              <div className="comments-controller flex items">
                <Avatar
                  src={"https://i.pravatar.cc/150?img=14"}
                  size={55}
                  className="mr-3"
                ></Avatar>
                <Input placeholder="Enter your comment here" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        visible={modal}
        title="Add New Item"
        footer={null}
        onCancel={() => setModal(false)}
      >
        <AddTodoForm
          onSave={(e) => saveTodo(e)}
          onCancel={() => setModal(false)}
          initialValues={{ date: moment(), priority: "high" }}
          teams={teams}
          projects={projects}
        />
      </Modal>
    </Default>
  );
}
