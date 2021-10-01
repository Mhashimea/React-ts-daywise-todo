import { MailOutlined, PhoneOutlined, SendOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { post } from "../../services/http-request";
import EmployeeProjectReport from "./components/EmployeeProjectReport";
import ProjectReports from "./components/ProjectReports";
import Loader from "../../components/ux/Loader";
import "./style.css";
import _ from "lodash";

export default function CompanyProfile() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const getProfile = async () => {
    const response = await post("organization");
    setData(response);
    console.log(_.get(data, "data"));
    setLoading(false);
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="company-profile">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="company-profile-banner">
            <img src={_.get(data, "data.data.coverImage", "")} alt="" />
          </div>
          <div className="company-profile-details">
            <div className="flex items-center">
              <div className="company-profile-logo">
                <Avatar
                  shape="square"
                  size={90}
                  className="rounded-md border"
                  src={_.get(data, "data.data.avatar", "")}
                ></Avatar>
              </div>
              <div className="company-profile-details-data">
                <div className="flex items-center mb-2">
                  <h1 className="text-lg font-semibold mr-3">
                    {_.get(data, "data.data.name", "")}
                  </h1>
                  <span className="text-xs text-gray-500">
                    www.test.website.com
                  </span>
                </div>
                <div className="company-profile-details-data-item">
                  <div className="">
                    <span>Email</span>
                    <h1>{_.get(data, "data.data.email", "")}</h1>
                  </div>
                  <div className="">
                    <span>Active Projects</span>
                    <h1>{_.get(data, "data.projectCount", "")}</h1>
                  </div>
                  <div className="">
                    <span>Team Members</span>
                    <h1>{_.get(data, "data.memberCount", "")}</h1>
                  </div>
                  <div className="">
                    <span>Linkedin</span>
                    <h1>{_.get(data, "data.data.linkedinUrl", "")}</h1>
                  </div>
                  <div className="">
                    <span>Twitter</span>
                    <h1>{_.get(data, "data.data.twitterUrl", "")}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start mt-3">
              <div className="company-profile-details-about">
                <h1>About Company</h1>
                <p>{_.get(data, "data.data.description", "")}</p>
              </div>
              <div className="company-profile-details-contacts ">
                <h1 className="mb-3">Contact Details</h1>
                <div className="company-profile-details-contacts-item">
                  <MailOutlined />
                  <span>{_.get(data, "data.data.email", "")}</span>
                </div>
                <div className="company-profile-details-contacts-item">
                  <PhoneOutlined />
                  <span>{_.get(data, "data.data.phone", "")}</span>
                </div>
                <div className="company-profile-details-contacts-item">
                  <PhoneOutlined />
                  <span>+91 9605509169 (Sales Department)</span>
                </div>
                <div className="company-profile-details-contacts-item">
                  <SendOutlined />
                  <span>{_.get(data, "data.data.address", "")}</span>
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2/3 mt-3" style={{ marginBottom: "4rem" }}>
                <ProjectReports />
                <EmployeeProjectReport />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
