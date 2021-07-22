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
  const [visible, setVisible] = useState(true);
  const [selectedTodo, setSelectedTodo] = useState();

  const onDragEnd = (e: any) => {
    const filtredData = todos.filter((a) => a.id === Number(e.draggableId));
    filtredData[0].status = e.destination.droppableId;
  };

  const onSelectTodo = (e) => {
    console.log(e);
    setSelectedTodo(e);
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
      <TodoModal visible={visible} data={selectedTodo} />
    </div>
  );
}
