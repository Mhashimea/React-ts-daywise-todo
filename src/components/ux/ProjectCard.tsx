import { AntDesignOutlined, DeleteOutlined, EditOutlined, EyeOutlined, MoreOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Dropdown, Menu, Tag, Tooltip } from 'antd';
import React from 'react';

export default function ProjectCard({ classNames }: any) {
  const projectMenu = (
    <Menu>
      <Menu.Item key="All" className="flex items-center">
        <EyeOutlined />
        <span>View</span>
      </Menu.Item>
      <Menu.Item key="Inprogress" className="flex items-center">
        <EditOutlined />
        <span>Edit</span>
      </Menu.Item>
      <Menu.Item key="Completed" className="flex items-center">
        <DeleteOutlined />
        <span>Delete</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <Card className={'project-card rounded-md mr-2 mb-2 shadow-md' + classNames}>
      <div className="flex items-center border-b pb-2 mb-2">
        <div className="flex-1 mr-2">
          <h1 className="text-base font-semibold truncate">Attendance Management Project</h1>
          <span className="text-sm text-gray-500">45 tasks are completed</span>
        </div>
        <Tag color="yellow">Inprogress</Tag>
      </div>
      <p className="text-sm text-gray-600 my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, consectetur iste! Quas voluptate, dolores excepturi, officiis</p>
      <div className="flex items-start my-3">
        <div className="flex-1">
          <span className="text-sm text-gray-500">Created</span>
          <p className="font-semibold">Muhammed Hashim Ea <br /> 22/05/2021 10:00 AM</p>
        </div>
        <div>
          <span className="text-sm text-gray-500">Start Date</span>
          <p className="font-semibold">22/05/2021</p>
        </div>
      </div>
      <div className="border-t pt-3 flex items-center">
        <Avatar.Group className="flex-1" maxCount={8} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
          <Tooltip title="Ant User" placement="top">
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
          </Tooltip>
          <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
          <Tooltip title="Ant User" placement="top">
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
          </Tooltip>
          <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
          <Tooltip title="Ant User" placement="top">
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
          </Tooltip>
          <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
          <Tooltip title="Ant User" placement="top">
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
          </Tooltip>
          <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
        </Avatar.Group>
        <Dropdown overlay={projectMenu} trigger={['click']}>
          <Button className="rounded-md flex items-center">
            <MoreOutlined className="text-sm" />
          </Button>
        </Dropdown>
      </div>
    </Card>
  )
}