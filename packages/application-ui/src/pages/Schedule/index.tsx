import React from "react";
import { useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:9090", {
  forceNew: true,
  transports: ["websocket"],
});

export default function Events() {
  useEffect(() => {
    socket.emit("todo:update", { id: 6 });
    socket.on("emit-todo:update", (arg) => {
      console.log(arg);
    });
  }, []);
  return (
    <div className="schedules">
      <h1>Schedule</h1>
    </div>
  );
}
