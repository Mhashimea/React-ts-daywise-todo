import {
  CalendarOutlined,
  CheckCircleOutlined,
  PlusSquareOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MeetingCard from "./MeetingCard";
import MeetingDetails from "./MeetingDetails";
import "./style.css";
import { v4 as uuidV4 } from "uuid";

export default function Connect() {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const [roomId, setRoomId] = useState("");

  const generateNewMeeting = async () => {
    setRoomId(uuidV4());
    setVisible(true);
  };
  return (
    <div className="connect p-3">
      <div className="connect-list">
        <div className="connect-actions">
          <div
            className="connect-actions-card new-meeting"
            onClick={generateNewMeeting}
          >
            <div className="connect-actions-card-icon">
              <VideoCameraOutlined className="text-white" />
            </div>
            <div>
              <h1>New Meeting</h1>
              <p>set up new meeting</p>
            </div>
          </div>
          <div className="connect-actions-card">
            <div className="connect-actions-card-icon">
              <PlusSquareOutlined className="text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-base">Join Meeting</h1>
              <p>via invitation link</p>
            </div>
          </div>
          <div className="connect-actions-card">
            <div className="connect-actions-card-icon">
              <CalendarOutlined className="text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-base">Schedule</h1>
              <p>plan your meetings</p>
            </div>
          </div>
        </div>
        <div className="connect-list-items">
          <h1 className="text-lg font-semibold mb-3">Upcoming Meetings</h1>
          {[1, 2, 2, 2, 2, 2, 2, 2, 2].map((meeting, index) => {
            return <MeetingCard index={index} />;
          })}
        </div>
      </div>

      <div className="connect-view">
        <MeetingDetails />
      </div>

      <Modal
        visible={visible}
        title="Meeting Details"
        footer={null}
        width={400}
        onCancel={() => setVisible(false)}
        closable={false}
      >
        <div className="meeting-modal-icon">
          <CheckCircleOutlined />
          <p>Meeting Created Successfully</p>
        </div>
        <div className="meeting-modal-text">
          <h1>{roomId}</h1>
        </div>
        <div className="text-center mt-5">
          <Button size="middle" className="rounded-xl mr-3 text-sm">
            Copy Link
          </Button>
          <Button
            size="middle"
            className="rounded-xl mr-3 text-sm"
            type="primary"
            onClick={() => history.push("/connect/" + roomId)}
          >
            Join Meeting
          </Button>
        </div>
      </Modal>
    </div>
  );
}
