import { FilterOutlined } from '@ant-design/icons'
import { Button, Dropdown, Menu } from 'antd'
import React, { useState } from 'react'
import DatePicker from '../../components/datepicker'
import Default from '../../components/layouts/Default'
import Header from '../../components/ux/Header'

export default function Todos() {
  const [priority, setPriority] = useState<any>("Priority")
  const [status, setStatus] = useState<any>("All")

  const priorityMenu = (
    <Menu onClick={e => setPriority(e.key)}>
      <Menu.Item key="Priority">
        <span>All</span>
      </Menu.Item>
      <Menu.Item key="High">
        <span>High</span>
      </Menu.Item>
      <Menu.Item key="Medium">
        Medium
      </Menu.Item>
      <Menu.Item key="Low">Low</Menu.Item>
    </Menu>
  )

  const statusMenu = (
    <Menu onClick={e => setStatus(e.key)}>
      <Menu.Item key="All">
        <span>All</span>
      </Menu.Item>
      <Menu.Item key="Completed">
        <span>Completed</span>
      </Menu.Item>
      <Menu.Item key="Pending">
        <span>Pending</span>
      </Menu.Item>
    </Menu>
  )

  return (
    <Default className="todos app-container m-auto w-full">
      <Header title="Todos" buttonText="Add New Item" />
      <div className="mt-5 flex">
        <div className="w-2/3">
          <DatePicker />
          <div className="todos-tasks mt-5">
            <div className="flex items-center">
              <h1 className="text-base font-semibold flex-1">Tasks</h1>
              <div className="flex items-center">
                <Dropdown overlay={priorityMenu} trigger={['click']} className="mr-2">
                  <Button className="rounded-md flex items-center">
                    <FilterOutlined className="text-sm" />
                    {priority}</Button>
                </Dropdown>
                <Dropdown overlay={statusMenu} trigger={['click']}>
                  <Button className="rounded-md flex items-center">
                    <FilterOutlined className="text-sm" />
                    {status}</Button>
                </Dropdown>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatibus harum? Totam accusamus architecto eveniet doloribus expedita, reprehenderit, optio sit quos quidem hic quasi, explicabo quas aliquam saepe quia itaque?</p>
          </div>
        </div>
      </div>
    </Default>
  )
}