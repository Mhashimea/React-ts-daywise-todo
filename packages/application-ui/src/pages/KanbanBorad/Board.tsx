import {
  ApartmentOutlined,
  ClockCircleOutlined,
  MessageOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
import { Avatar, Tag } from "antd";
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import TodoModal from "./TodoModal";

export default function Board() {
  const [workflow, setWorkflow] = useState([
    "Todo",
    "Inprogress",
    "Completed",
    "Closed",
  ]);
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "ishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaning",
      status: "Todo",
    },
    {
      id: 2,
      name: "ishing and graphic design, Lorem ipsum is a placehold of a document or a typeface without relying on meaning",
      status: "Inprogress",
    },
    {
      id: 3,
      name: "ishing and graphic design, Lorem ipsum is a placehold of a document or a typeface without relying on meaning",
      status: "Completed",
    },
    {
      id: 4,
      name: "ishing and graphic design, Lorem ipsum is a placehold of a document or a typeface without relying on meaning",
      status: "Closed",
    },
  ]);
  const [visible, setVisible] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({
    id: 1,
    title: "Complete the app with mock design",
    subTasks: [
      {
        id: 1,
        title: "Events page design research",
        status: "Pending",
        assignee: "Hashim Ea",
      },
      {
        id: 2,
        title: "Todo single view page UI design",
        status: "Inprogress",
        assignee: "Suhail Ea",
      },
    ],
    percentage: 35,
    assignee: "Muhammed Hashim Ea",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi harum impedit dolorem culpa rem vel voluptatibus, dolores aperiam accusantium molestiae totam adipisci velit itaque asperiores fugit, voluptatum inventore similique!tium molestiae totam adipisci velit itaque asperiores fugit, voluptatum inventore similique!",
    comments: [
      {
        id: 1,
        user: {
          name: "Hashim Ea",
          avatar: "https://i.pravatar.cc/150?img=53",
        },
        date: "Yesterday at 2:33pm",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellat repellendus modi voluptatem atque ad, eos hic totam magnam!Quaerat fugit quis quae incidunt mollitia autem possimus a,voluptate natus?",
      },
      {
        id: 2,
        user: {
          name: "Nafeesa Ea",
          avatar: "https://i.pravatar.cc/150?img=13",
        },
        date: "Thursday at 2:33pm",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellat repelluptate natus?",
      },
      {
        id: 3,
        user: {
          name: "Sinan Ea",
          avatar: "https://i.pravatar.cc/150?img=3",
        },
        date: "Monday at 2:33pm",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellat repelluptate natus?",
      },
      {
        id: 3,
        user: {
          name: "John doe",
          avatar: "https://i.pravatar.cc/150?img=55",
        },
        date: "Monday at 2:33pm",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellat repelluptate natus?",
        attachments: [
          {
            url: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "Image 1",
          },
          {
            name: "Image 2",
            url: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          },
        ],
      },
    ],
    status: "Inprogress",
  });

  const onDragEnd = (e: any) => {
    const filtredData = todos.filter((a) => a.id === Number(e.draggableId));
    filtredData[0].status = e.destination.droppableId;
  };

  const onSelectTodo = (e) => {
    // setSelectedTodo(e);
    setVisible(true);
  };
  return (
    <div className="board">
      <div className="board-list">
        <DragDropContext onDragEnd={onDragEnd}>
          {workflow.map((workflow, index) => {
            return (
              <Droppable droppableId={workflow} key={index}>
                {(provided, snapshot) => {
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="board-list-item"
                    >
                      <h1>{workflow}</h1>
                      {todos.map((item, index) => {
                        return (
                          item.status === workflow && (
                            <Draggable
                              key={item.id}
                              draggableId={`${item.id}`}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    className="board-list-item-data"
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    onClick={() => onSelectTodo(item)}
                                  >
                                    <div className="flex items-center my-3 mx-2">
                                      <div className="flex items-center flex-1">
                                        <ClockCircleOutlined className="text-xs text-gray-500 mr-1" />
                                        <span className="text-xs text-gray-500">
                                          21-July-2021
                                        </span>
                                      </div>
                                      <Tag className="rounded-md" color="green">
                                        Feature
                                      </Tag>
                                    </div>
                                    <h2 className="my-3 mx-2">
                                      Iellat atque vero nisi minima accusamus,
                                      ad accusantium, dolorue vero nisi cor
                                    </h2>
                                    <div className="board-list-item-data-attach"></div>

                                    <div className="board-list-item-data-footer">
                                      <div className="board-footer-item">
                                        <PaperClipOutlined />
                                        <span>3 </span>
                                      </div>
                                      <div className="board-footer-item">
                                        <MessageOutlined />
                                        <span>8</span>
                                      </div>
                                      <div className="board-footer-item">
                                        <ApartmentOutlined />
                                        <span>55</span>
                                      </div>
                                      <div className="flex-1" />
                                      <Avatar
                                        src="https://i.pravatar.cc/150?img=5"
                                        size="small"
                                      />
                                    </div>
                                  </div>
                                );
                              }}
                            </Draggable>
                          )
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            );
          })}
        </DragDropContext>
      </div>
      <TodoModal
        visible={visible}
        data={selectedTodo}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
}
