import { Menu, message, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProjectForm from "../../components/forms/ProjectForm";
import Loader from "../../components/ux/Loader";
import NoData from "../../components/ux/Nodata";
import { post } from "../../services/http-request";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

export default function Projects() {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<any>("All");
  const [projects, setProjects] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [filter, setFilter] = useState(null);
  const teams = useSelector((state: any) => state.CommonReducer.teams);

  const getData = async () => {
    setLoading(true);
    const { data } = await post("projects", {
      status: filter === "All" ? null : filter,
    });
    setProjects(data);
    setLoading(false);
  };

  const saveData = async (e: any) => {
    const response = await post("add-project", { payload: e });
    if (response.success) {
      message.success("Project addedd successfully");
      setModalState(false);
      getData();
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

  useEffect(() => {
    getData();
  }, [filter]);

  return (
    <div className="projects p-3">
      <ProjectFilter
        onAddNew={() => setModalState(true)}
        onChangeStatusFilter={(e) => setFilter(e)}
      />

      {loading ? (
        <Loader />
      ) : (
        <div className="projects-list">
          {projects &&
            projects.length > 0 &&
            projects.map((proj: any, i: number) => {
              return <ProjectCard data={proj} key={i} />;
            })}
        </div>
      )}

      {!projects.length && !loading && <NoData />}

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
