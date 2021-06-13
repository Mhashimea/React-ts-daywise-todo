import { FilterOutlined } from '@ant-design/icons'
import { Button, Card, Dropdown, Menu } from 'antd'
import React, { useState } from 'react'
import TodaysPerfomaceChart from '../charts/TodaysPerfomaceChart'

export default function TodaysPerfomance() {
  const [project, setProject] = useState<any>('All');

  const projectMenu = (
    <Menu onClick={(e) => setProject(e.key)}>
      <Menu.Item key="All">
        <span>All</span>
      </Menu.Item>
      <Menu.Item key="Project 1">
        <span>Project 1</span>
      </Menu.Item>
      <Menu.Item key="Project 2">
        <span>Project 2</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <Card className="rounded-md">
      <div className="flex items-center mb-2">
        <h1 className="text-base font-semibold flex-1">
          Today's Perfomance <span className="text-xs">(22/05/2021)</span>
        </h1>
        <a className="primary-color" href="#">View More</a>
      </div>
      <p className="text-xs text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        culpa nesciunt illo alias ut, quas similique assumenda unde aliq
            </p>
      <div className="flex justify-end">
        <Dropdown
          overlay={projectMenu}
          trigger={['click']}
          className="text-right"
        >
          <Button className="rounded-md flex items-center">
            <FilterOutlined className="text-sm" />
            {project}
          </Button>
        </Dropdown>
      </div>
      <TodaysPerfomaceChart />
    </Card>
  )
}