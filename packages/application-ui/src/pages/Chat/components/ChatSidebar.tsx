import { SearchOutlined } from "@ant-design/icons";
import { Avatar, Input } from "antd";
import classNames from "classnames";
import React from "react";
import { generaterandomcolor } from "../../../util/common";
import "./style.css";

export default function ChatSidebar() {
  return (
    <div className="chat-sidebar">
      <div className="chat-sidebar-header">
        <h1>Messages</h1>
        <SearchOutlined />
      </div>
      <div className="chat-sidebar-search">
        <Input placeholder="Search Chats" />
      </div>
      <div className="chat-sidebar-chats">
        <h1>TEAM</h1>
        {[19, 57, 45].map((item, index) => {
          return (
            <div
              className={classNames({
                "chat-sidebar-chats-item": true,
                "chat-sidebar-chats-item-active": index === 0,
              })}
            >
              <div className="chat-sidebar-team">
                <Avatar
                  size={35}
                  src={`https://i.pravatar.cc/150?img=${item}`}
                  style={{ backgroundColor: generaterandomcolor() }}
                >
                  <span>R</span>
                </Avatar>
              </div>
              <div className="ml-3">
                <div className="flex items-center mb-1">
                  <h2>Team todo app</h2>
                  <span>5 min ago</span>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae facere in ab. Explicabo recusandae, corporis vel dolor
                  nesciunt quibusdam dolorem quaerat enim, aspernatur excepturi
                  nobis, sequi iusto. Dolores, aut accusamus.
                </p>
              </div>
            </div>
          );
        })}
        <h1>PERSONAL</h1>
        {[25, 42, 55, 24, 26].map((item, index) => {
          return (
            <div
              className={classNames({
                "chat-sidebar-chats-item": true,
              })}
            >
              <div className="chat-sidebar-team">
                <Avatar
                  size={35}
                  src={`https://i.pravatar.cc/150?img=${item}`}
                  style={{ backgroundColor: generaterandomcolor() }}
                >
                  <span>R</span>
                </Avatar>
              </div>
              <div className="ml-3">
                <div className="flex items-center mb-1">
                  <h2>Team todo app</h2>
                  <span>5 min ago</span>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae facere in ab. Explicabo recusandae, corporis vel dolor
                  nesciunt quibusdam dolorem quaerat enim, aspernatur excepturi
                  nobis, sequi iusto. Dolores, aut accusamus.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
