import { ClockCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { createRef, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import MeetingControl from "./MeetingControl";
import "./style.css";
import peer from "peerjs";
import _ from "lodash";

const socket = io("http://localhost:9090", {
  forceNew: true,
  transports: ["websocket"],
});

const peers = {};

export default function MeetingView() {
  const { id }: any = useParams();
  const [currentUser, setCurrentUser] = useState(
    useSelector((state: any) => state.AuthReducer.currentUser)
  );

  const myPeer = new peer(`${_.get(currentUser, "id")}`, {
    host: "/ ",
    port: 3001,
  });
  const [streamLength, setStreamLength] = useState(1);
  const [videowidth, setVideoWidth] = useState("100%");
  const [videoheight, setVideoHeight] = useState("250px");
  const [streamObj, setStreamObj] = useState<any[]>([]);
  const videoRef = useRef<any>(null);

  const generateVideoResolution = () => {
    if (streamLength <= 2) {
      const width = 100 / streamLength - streamLength / 2;
      setVideoWidth(`${width}%`);
      setVideoHeight("100%");
    } else if (streamLength > 2 && streamLength <= 4) {
      setVideoWidth(`49%`);
    } else {
      setVideoWidth("250px");
      setVideoHeight("250px");
    }
  };

  const iniStream = async () => {
    const myVideo = document.createElement("video");
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        console.log(stream);
        setStreamObj([
          ...streamObj,
          { userId: _.get(currentUser, "id"), stream },
        ]);
        console.log(streamObj);
        myPeer.on("open", () => {
          socket.emit("join-room", id, _.get(currentUser, "id"));
        });

        myPeer.on("call", (call) => {
          console.log(call);
          call.answer(stream);
          const video = document.createElement("video");
          call.on("stream", (userVideoStream) => {
            console.log(userVideoStream);
          });
        });
      });
  };

  useEffect(() => {
    generateVideoResolution();
  }, [streamLength]);

  useEffect(() => {
    iniStream();
  }, []);

  return (
    <div className="meeting-view p-3">
      <div className="meeting-view-main">
        <div className="meeting-view-header">
          <div className="flex-1">
            <h1>Daily Standup Call</h1>
            <p>
              <ClockCircleOutlined className="mr-1" /> From 10:00 am - 10.30 am
            </p>
          </div>
          <Button className="rounded-md">Invite People</Button>
        </div>

        <div className="meeting-view-streaming" id="stream-grid">
          {/* <video
            className="video-container"
            autoPlay
            playsInline
            style={{ width: videowidth, height: videoheight }}
            muted={true}
          ></video> */}
        </div>

        <div className="meeting-view-controls">
          <MeetingControl />
        </div>
      </div>

      <div className="meeting-view-chat">
        <h1>Chat Section</h1>
      </div>
    </div>
  );
}
