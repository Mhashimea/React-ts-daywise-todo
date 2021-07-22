import { Avatar, message, Modal, Table, Tag, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import AddTeamForm from "../../components/forms/AddTeamForm";
import { post } from "../../services/http-request";
import TeamCard from "./TeamCard";
import TeamsFilter from "./TeamsFilter";
import "./style.css";

export default function Teams() {
  const columns = [
    {
      title: "Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Projects",
      dataIndex: "projects",
      key: "projects",
      render: (projects: any) => (
        <Avatar.Group>
          {projects &&
            projects.map((proj: any) => {
              return (
                <Tooltip
                  title={proj.name}
                  placement="top"
                  className="cursor-pointer"
                >
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
      title: "Status",
      dataIndex: "active",
      key: "active",
      render: (active: any) => (
        <>
          <Tag color={active ? "green" : "red"} key={active}>
            {active ? "Active" : "Inactive"}
          </Tag>
        </>
      ),
    },
  ];
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);

  const getData = async () => {
    const response = await post("teams");
    if (response.success) {
      setData(response.data);
    }
  };

  const saveData = async (e: any) => {
    const response = await post("add-team", { payload: e });
    if (response.success) {
      getData();
      message.success("Team Added Successfully");
      setVisible(false);
    } else {
      message.error(response.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="teams">
      <TeamsFilter />
      <div className="teams-list">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1].map((item) => {
          return <TeamCard />;
        })}
      </div>
      <Modal
        visible={visible}
        title="Add Team Member"
        footer={null}
        onCancel={() => setVisible(false)}
      >
        <AddTeamForm onSave={saveData} />
      </Modal>
    </div>
  );
}
