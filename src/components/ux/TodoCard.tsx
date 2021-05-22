import { AntDesignOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons';
import { Checkbox, Tag, Tooltip, Avatar, Progress } from 'antd';
import React from 'react';

export default function TodoCard() {
  return (
    <div className="bg-white border  p-4 rounded-md todo-card mb-3">
      <div className="flex items-start">
        <Checkbox></Checkbox>
        <div className="flex items-start ml-2">
          <div>
            <h1 className="text-base font-semibold mb-1">
              Search inspiration for upcoming project
          </h1>
            <p className="text-xs text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              debitis repudiandae explicabo voluptate laborum delectus sapiente
              nisi soluta doloremque, itaque facilis numquam repellat nobis
              placeat deleniti ab laboriosam iusto iure!
          </p>
          </div>
          <div className="flex items-center">
            <Tag className="rounded-md mr-2" color="#1a73e8">
              Label
          </Tag>
            <Tag className="rounded-md" color="red">
              High Priority
          </Tag>
          </div>
        </div>
      </div>
      <div className="mt-3 ml-5 flex items-center justify-between">
        <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
          <Tooltip title="Ant User" placement="top">
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
          </Tooltip>
          <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
        </Avatar.Group>
        <span className="flex items-center"><CalendarOutlined className="mr-1" /> 22/05/2021</span>
        <span className="flex items-center"><UserOutlined className="mr-1" /> Hashim Ea</span>
        <div className="w-1/5">
          <Progress percent={30} />
        </div>
        <div className="flex items-center">
          <Avatar>
            <span>R</span>
          </Avatar>
          <h1 className="ml-2 font-medium">Todo App</h1>
        </div>
      </div>
    </div>
  );
}
