import React from "react";
import ChatAction from "./components/ChatAction";
import ChatDetails from "./components/ChatDetails";
import ChatSidebar from "./components/ChatSidebar";
import "./style.css";

export default function Chat() {
  return (
    <div className="chat">
      <ChatSidebar />
      <div className="flex items-start bg-white w-full h-full">
        <ChatAction />
        <ChatDetails />
      </div>
    </div>
  );
}
