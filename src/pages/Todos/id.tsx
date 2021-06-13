import { ClockCircleOutlined } from '@ant-design/icons';
import { Avatar, Checkbox, Input, Progress, Tag } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Default from '../../components/layouts/Default';
import Header from '../../components/ux/Header';
import { useParams } from 'react-router-dom';
import { post } from '../../services/http-request';
import DynamicEditForm from '../../components/todos/DynamicEditForm';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateTodos } from '../../store/actions/todos';

export default function TodoView() {
  const dispatch = useDispatch()
  let { id }: any = useParams();
  const [data, setData] = useState<any>({});
  const [editForm, setEditForm] = useState('');

  const teams = useSelector((state: any) => state.CommonReducer.teams)

  const getData = async () => {
    const response = await post('todos', { id: id });
    if (response.data.length) setData(response.data[0]);
  };

  const onUpdateData = (e: any) => {
    Object.keys(e).map(key => {
      data[key] = e[key]
    })
    updateTodo()
    setEditForm("")
  }

  const updateTodo = async () => {
    await dispatch(UpdateTodos({ payload: data }))
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <Default className="todos-view app-container m-auto w-full h-full">
      <Header title="Todos" />
      <div className="todos-view-wrapper flex mt-5">
        <div className="todos-view__details w-3/4">
          <div className="flex items-center">
            <div className="item-control flex-1">
              <span className="text-gray-500 text-sm">Task Name</span>
              {editForm === 'name' ? (
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
                  onClick={() => setEditForm('name')}
                >
                  {data.name}
                </h1>
              )}
            </div>
            <Checkbox
              className="border p-2 rounded-md"
              checked={data.status === 'COMPLETED'}
            >
              Mark as completed
            </Checkbox>
          </div>
          <div className="flex items-center my-10 justify-between">
            <div className="item-control">
              <span className="text-gray-500 text-sm">Assigned To</span>
              {
                editForm === 'assignee' ? (
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
                    <span className="text-sm font-semibold" onClick={() => setEditForm("assignee")}>
                      {data.user?.fullName}
                    </span>
                  </div>
                )
              }

            </div>
            <div className="item-control">
              <span className="text-gray-500 text-sm">Due Date</span>
              <div className="flex items-center mt-2">
                <ClockCircleOutlined className="mr-1" />
                <span className="text-sm font-semibold">
                  {moment(data.date).format('DD-MM-YYYY')}
                </span>
              </div>
            </div>
            <div className="item-control flex flex-col">
              <span className="text-gray-500 text-sm">Priority</span>
              <Tag className="mt-2 rounded-md capitalize" color="red">
                {data.priority}
              </Tag>
            </div>
            <div className="item-control flex flex-col">
              <span className="text-gray-500 text-sm">Label</span>
              <div className="flex flex-wrap">
                {data.label &&
                  data.label.split(',').map((item: string) => {
                    return (
                      <Tag
                        className="mt-2 rounded-md"
                        color="processing"
                        key={item}
                      >
                        {item}
                      </Tag>
                    );
                  })}
              </div>
            </div>
            <div className="item-control w-1/5">
              <span className="text-gray-500 text-sm">Progress</span>
              <Progress percent={30} />
            </div>
          </div>
          <div className="my-10">
            <div className="item-control">
              <span className="text-gray-500 text-sm">Description</span>
              {
                editForm === 'description' ? (
                  <DynamicEditForm
                    fieldType="TEXTAREA"
                    placeholder="Description"
                    value={data.description}
                    name="description"
                    onSave={onUpdateData}
                    onCancel={() => setEditForm("")}
                  />
                ) : (
                  <p className="cursor-text" onClick={() => setEditForm('description')}>{data.description}</p>
                )
              }
            </div>
          </div>
          <div className="my-10">
            <span className="text-gray-500 text-sm">Comments</span>
            <div className="comments mt-4">
              {Array.from(Array(5), (e, i) => {
                return (
                  <div className="flex items-start mb-5">
                    <div>
                      <Avatar
                        src={'https://i.pravatar.cc/150?img=' + i}
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
                  src={'https://i.pravatar.cc/150?img=14'}
                  size={55}
                  className="mr-3"
                ></Avatar>
                <Input placeholder="Enter your comment here" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Default>
  );
}
