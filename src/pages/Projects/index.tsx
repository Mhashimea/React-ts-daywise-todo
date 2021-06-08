import { FilterOutlined } from '@ant-design/icons';
import { Button, Dropdown, Input, Menu, message, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import ProjectForm from '../../components/forms/ProjectForm';
import Default from '../../components/layouts/Default';
import Header from '../../components/ux/Header';
import ProjectCard from '../../components/ux/ProjectCard';
import { post } from '../../services/http-request';

export default function Projects({ className }: any) {
  const [status, setStatus] = useState<any>("All")
  const [modalState, setModalState] = useState(false)
  const [teams, setTeams] = useState([])
  const [projects, setProjects] = useState([])

  const getTeams = async () => {
    const response = await post('teams');
    if (response.success) {
      setTeams(response.data);
    }
  };

  const saveData = async (e: Object) => {
    const response = await post('add-project', { payload: e });
    if (response.success) {
      message.success("Project addedd successfully")
      setModalState(false)
    } else {
      message.error(response.message)
    }
  }

  const getProjects = async () => {
    const response = await post('projects')
    setProjects(response.data)
    console.log(response)
  }

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

  useEffect(() => {
    getTeams()
    getProjects()
  }, [])
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
        {projects.map((proj, i) => {
          return (
            <ProjectCard data={proj} />
          )
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
        <ProjectForm onCancel={() => setModalState(false)} teams={teams} onSave={saveData} />
      </Modal>
    </Default>
  );
}
