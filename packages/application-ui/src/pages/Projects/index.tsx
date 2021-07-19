import { FilterOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Menu, message, Modal } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProjectForm from "../../components/forms/ProjectForm";
import ProjectCard from "./ProjectCard";
import { post } from "../../services/http-request";
import ProjectFilter from "./ProjectFilter";

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
      <ProjectFilter />
      <div className="mt-5 flex items-start flex-wrap">
        {projects &&
          projects.map((proj: any, i: number) => {
            return <ProjectCard data={proj} key={i} />;
          })}
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
