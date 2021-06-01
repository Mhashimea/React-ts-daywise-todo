import { Table, Tag, Avatar, Tooltip } from 'antd';
import React, { useState } from 'react';
import Default from '../../components/layouts/Default';
import Header from '../../components/ux/Header';

export default function Teams({ className }: any) {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Projects',
      dataIndex: 'projects',
      key: 'projects',
      render: (projects: any) => (
        <Avatar.Group>
          {projects.map((proj: any) => {
            return (
              <Tooltip title={proj.name} placement="top" className="cursor-pointer">
                <Avatar>
                  <span>{proj.name.slice(0, 1)}</span>
                </Avatar>
              </Tooltip>
            );
          })}
        </Avatar.Group>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'active',
      key: 'active',
      render: (active: any) => (
        <>
          <Tag color={active ? 'green' : 'red'} key={active}>
            {active ? 'Active' : 'Inactive'}
          </Tag>
        </>
      ),
    }
  ];
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Muhammed Hashim Ea',
      email: 'hashimea@outlook.com',
      projects: [
        {
          id: 1,
          name: 'RadixHR',
        },
        {
          id: 1,
          name: 'Trovapage',
        },
        {
          id: 1,
          name: 'Grabian',
        },
        {
          id: 1,
          name: 'RadixHR',
        },
      ],
      active: true,
    },
  ]);
  return (
    <Default className="teams app-container m-auto w-full">
      <Header title="Teams" buttonText="Add New Member" />
      <div className="teams-table mt-5">
        <Table columns={columns} dataSource={data} bordered={true} />
      </div>
    </Default>
  );
}
