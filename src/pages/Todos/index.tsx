import { FilterOutlined } from '@ant-design/icons';
import { Button, Card, Dropdown, Menu, Modal, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import TodaysPerfomaceChart from '../../components/charts/TodaysPerfomaceChart';
import DatePicker from '../../components/datepicker';
import AddMeetingForm from '../../components/forms/AddMeetingForm';
import AddTodoForm from '../../components/forms/AddTodoForm';
import Default from '../../components/layouts/Default';
import Header from '../../components/ux/Header';
import TodoCard from '../../components/ux/TodoCard';
import { post } from '../../services/http-request';

export default function Todos() {
  const [priority, setPriority] = useState<any>('Priority');
  const [status, setStatus] = useState<any>('All');
  const [project, setProject] = useState<any>('All');
  const [modalState, setModalState] = useState<any>(null);

  const priorityMenu = (
    <Menu onClick={(e) => setPriority(e.key)}>
      <Menu.Item key="Priority">
        <span>All</span>
      </Menu.Item>
      <Menu.Item key="High">
        <span>High</span>
      </Menu.Item>
      <Menu.Item key="Medium">Medium</Menu.Item>
      <Menu.Item key="Low">Low</Menu.Item>
    </Menu>
  );

  const statusMenu = (
    <Menu onClick={(e) => setStatus(e.key)}>
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
  );

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

  const buttonMenu = (
    <Menu onClick={(e) => setModalState(e.key)}>
      <Menu.Item key="todo">
        <span>Todo</span>
      </Menu.Item>
      <Menu.Item key="meeting">
        <span>Meeting</span>
      </Menu.Item>
    </Menu>
  );

  const getTodos = async () => {
    const response = await post('todos')
    console.log(response)
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <Default className="todos app-container m-auto w-full">
      <Header title="Todos">
        <Dropdown.Button
          overlay={buttonMenu}
          type="primary"
          trigger={['click']}
          className="rounded-md"
        >
          Add New Item
        </Dropdown.Button>
      </Header>

      <div className="mt-5 flex">
        <div className="w-2/3">
          <DatePicker />
          <div className="todos-tasks mt-5">
            <div className="flex items-center">
              <h1 className="text-base font-semibold flex-1">Tasks</h1>
              <div className="flex items-center">
                <Dropdown
                  overlay={priorityMenu}
                  trigger={['click']}
                  className="mr-2"
                >
                  <Button className="rounded-md flex items-center">
                    <FilterOutlined className="text-sm" />
                    {priority}
                  </Button>
                </Dropdown>
                <Dropdown overlay={statusMenu} trigger={['click']}>
                  <Button className="rounded-md flex items-center">
                    <FilterOutlined className="text-sm" />
                    {status}
                  </Button>
                </Dropdown>
                <Dropdown
                  overlay={projectMenu}
                  trigger={['click']}
                  className="ml-2"
                >
                  <Button className="rounded-md flex items-center">
                    <FilterOutlined className="text-sm" />
                    {project}
                  </Button>
                </Dropdown>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              voluptatibus harum? Totam accusamus architecto eveniet doloribus
              expedita, reprehenderit, optio sit quos quidem hic quasi,
              explicabo quas aliquam saepe quia itaque?
            </p>
            <div className="mt-5">
              {[0, 1, 1, 2, 2, 2, 2, 2].map((item) => {
                return <TodoCard />;
              })}
            </div>
          </div>
        </div>
        <div className="w-1/3 ml-3">
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
          <Card className="rounded-md mt-3">
            <h1 className="text-base font-semibold flex-1">
              Today's Meetings <span className="text-xs">(22/05/2021)</span>
            </h1>
            <p className="text-xs text-gray-500 pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              culpa nesciunt illo alias ut, quas similique assumenda unde aliq
            </p>
            <div className="max-h-72 overflow-auto border-t">
              {Array.from(Array(10), (e, i) => {
                return (
                  <div className="flex items-center my-5">
                    <div className="flex-1">
                      <h1>Meeting with new client</h1>
                      <span className="text-xs text-gray-500 mr-2">
                        Google Meet:
                      </span>
                      <a className="primary-color" href="#">https:googlemeet.com</a>
                    </div>
                    <Tag className="rounded-md">10 am</Tag>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>

      <Modal
        visible={modalState !== null}
        title="Add New Item"
        footer={null}
        onCancel={() => setModalState(null)}
      >
        {modalState === 'todo' ? (
          <AddTodoForm
            onSave={(e) => console.log(e)}
            onCancel={() => setModalState(null)}
          />
        ) : (
          <AddMeetingForm onCancel={() => setModalState(null)} />
        )}
      </Modal>
    </Default>
  );
}
