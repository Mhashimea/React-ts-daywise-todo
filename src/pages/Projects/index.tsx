import { FilterOutlined } from '@ant-design/icons';
import { Button, Dropdown, Input, Menu, Modal } from 'antd';
import React, { useState } from 'react';
import ProjectForm from '../../components/forms/ProjectForm';
import Default from '../../components/layouts/Default';
import Header from '../../components/ux/Header';
import ProjectCard from '../../components/ux/ProjectCard';

export default function Projects({ className }: any) {
  const [status, setStatus] = useState<any>("All")
  const [modalState, setModalState] = useState(false)

  const statusMenu = (
    <Menu onClick={(e) => setStatus(e.key)}>
      <Menu.Item key="All">
        <span>All</span>
      </Menu.Item>
      <Menu.Item key="Inprogress">
        <span>Inprogress</span>
      </Menu.Item>
      <Menu.Item key="Completed">
        <span>Completed</span>
      </Menu.Item>
      <Menu.Item key="Upcoming">
        <span>Upcoming</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <Default className="projects app-container m-auto w-full">
      <Header title="Projects" buttonText="Add New Project" onClick={() => setModalState(true)} />
      <div className="projects-filter flex items-center justify-end mt-5">
        <Input placeholder="Search Project..." className="w-1/3 mr-3" />
        <Dropdown overlay={statusMenu} trigger={['click']}>
          <Button className="rounded-md flex items-center">
            <FilterOutlined className="text-sm" />
            {status}
          </Button>
        </Dropdown>
      </div>
      <div className="mt-5 flex items-center flex-wrap">
        {Array.from(Array(10), (e, i) => {
          return <ProjectCard />;
        })}
      </div>
      <div className="text-center">
        <Button type="primary" className="rounded-md my-5">Load More</Button>
      </div>
      <Modal
        visible={modalState}
        title="Add New Project"
        footer={null}
        onCancel={() => setModalState(false)}
      >
        <ProjectForm onCancel={() => setModalState(false)} />
      </Modal>
    </Default>
  );
}
