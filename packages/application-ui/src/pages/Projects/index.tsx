import { FilterOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Menu, message, Modal } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProjectForm from "../../components/forms/ProjectForm";
import ProjectCard from "../../components/ux/ProjectCard";
import { post } from "../../services/http-request";

export default function Projects() {
  const [status, setStatus] = useState<any>("All");
  const [modalState, setModalState] = useState(false);
  const teams = useSelector((state: any) => state.CommonReducer.teams);
  const projects = useSelector((state: any) => state.CommonReducer.projects);

  const saveData = async (e: any) => {
    const response = await post("add-project", { payload: e });
    if (response.success) {
      message.success("Project addedd successfully");
      setModalState(false);
    } else {
      message.error(response.message);
    }
  };

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
    <div className="projects">
      <div className="projects-filter flex items-center justify-end mt-5">
        <Input placeholder="Search Project..." className="w-1/3 mr-3" />
        <Dropdown overlay={statusMenu} trigger={["click"]}>
          <Button className="rounded-md flex items-center">
            <FilterOutlined className="text-sm" />
            {status}
          </Button>
        </Dropdown>
      </div>
      <div className="mt-5 flex items-start flex-wrap">
        {projects &&
          projects.map((proj: any, i: number) => {
            return <ProjectCard data={proj} key={i} />;
          })}
      </div>
      <div className="text-center">
        <Button type="primary" className="rounded-md my-5">
          Load More
        </Button>
      </div>
      <Modal
        visible={modalState}
        title="Add New Project"
        footer={null}
        onCancel={() => setModalState(false)}
      >
        <ProjectForm
          onCancel={() => setModalState(false)}
          teams={teams}
          onSave={saveData}
        />
      </Modal>
    </div>
  );
}
