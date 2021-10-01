import { message, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddTeamForm from "../../components/forms/AddTeamForm";
import Loader from "../../components/ux/Loader";
import NoData from "../../components/ux/Nodata";
import { post } from "../../services/http-request";
import "./style.css";
import TeamCard from "./TeamCard";
import TeamsFilter from "./TeamsFilter";

export default function Teams() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState(null);
  const [designation, setDesignation] = useState<any>([]);
  const projects = useSelector((state: any) => state.CommonReducer.projects);

  const getData = async () => {
    setLoading(true);
    const response = await post("teams", {
      active: filter === "Active" ? true : filter === "Inactive" ? false : null,
    });
    if (response.success) {
      setData(response.data);
    }
    setLoading(false);
  };

  const getDesignation = async () => {
    const { data } = await post("designation", { active: null });
    setDesignation(data);
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
  }, [filter]);

  useEffect(() => {
    getDesignation();
  }, []);

  return (
    <div className="teams p-3">
      <TeamsFilter
        onChangeStatusFilter={(e) => setFilter(e)}
        onAddNew={() => setVisible(true)}
      />
      {loading ? (
        <Loader />
      ) : (
        <div className="teams-list">
          {data.map((item) => {
            return <TeamCard data={item} />;
          })}
        </div>
      )}
      {!data.length && !loading && <NoData />}

      <Modal
        visible={visible}
        title="Add Team Member"
        footer={null}
        onCancel={() => setVisible(false)}
      >
        <AddTeamForm
          onSave={saveData}
          designation={designation}
          projects={projects}
          onCancel={() => setVisible(false)}
          visible={visible}
        />
      </Modal>
    </div>
  );
}
