import {
  ApartmentOutlined,
  ClockCircleOutlined,
  MessageOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Tag } from "antd";
import _ from "lodash";
import moment from "moment";
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useHistory } from "react-router-dom";
import NoTodoImage from "../../assets/images/svg/empty-box.svg";
import { todoWorkflow } from "../../util/common";
import TodoModal from "./TodoModal";

interface BoardProps {
  todos: any[];
  onAddNew?: () => void;
  onUpdateStatus?: (data, status) => void;
  onNavigate?: (data) => void;
}

function NoTodoData({ onClick }) {
  return (
    <div className="notodo-data">
      <img src={NoTodoImage} alt="" />
      <h1>No Items Found</h1>
      <Button
        type="default"
        className="rounded-md text-sm"
        size="small"
        onClick={onClick}
      >
        Add New Item
      </Button>
    </div>
  );
}

export default function Board({
  todos,
  onAddNew,
  onUpdateStatus,
  onNavigate,
}: BoardProps) {
  const history = useHistory();
  const [workflow, setWorkflow] = useState(todoWorkflow);
  const [visible, setVisible] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({});

  const onDragEnd = (e: any) => {
    const filteredData: any = todos.filter(
      (a: any) => a.id === Number(e.draggableId)
    );
    if (filteredData[0].status !== e.destination.droppableId) {
      filteredData[0].status = e.destination.droppableId;
      if (onUpdateStatus)
        onUpdateStatus(filteredData[0], e.destination.droppableId);
    }
  };

  const onSelectTodo = (e) => {
    setSelectedTodo(e);
    // setVisible(true);
    history.push("/kanban-board/" + e.id);
  };

  const checkEmptyWorkflow = (workflow: string) => {
    return todos.filter((a) => a.status === workflow);
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
                      {!checkEmptyWorkflow(workflow).length ? (
                        <NoTodoData onClick={onAddNew} />
                      ) : (
                        <>
                          {todos.map((item: any, index) => {
                            const labels = item.label.split(",");
                            return (
                              <>
                                {item.status === workflow && (
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
                                                {moment(item.createdAt).format(
                                                  "DD-MMMM-YYYY"
                                                )}
                                              </span>
                                            </div>
                                            {labels.map((label) => {
                                              return (
                                                <Tag
                                                  className="rounded-md"
                                                  color="green"
                                                >
                                                  {label}
                                                </Tag>
                                              );
                                            })}
                                          </div>
                                          <h2 className="my-3 mx-2">
                                            {item.name}
                                          </h2>
                                          <div className="board-list-item-data-attach"></div>

                                          <div className="board-list-item-data-footer">
                                            <div className="board-footer-item">
                                              <PaperClipOutlined />
                                              <span>
                                                {
                                                  _.get(item, "attachments", [])
                                                    .length
                                                }
                                              </span>
                                            </div>
                                            <div className="board-footer-item">
                                              <MessageOutlined />
                                              <span>8</span>
                                            </div>
                                            <div className="board-footer-item">
                                              <ApartmentOutlined />
                                              <span>
                                                {
                                                  _.get(item, "childTodo", [])
                                                    .length
                                                }
                                              </span>
                                            </div>
                                            <div className="flex-1" />
                                            <Avatar
                                              src={_.get(item, "user.avatar")}
                                              size="small"
                                              style={{
                                                color: "#000",
                                              }}
                                            >
                                              <span>
                                                {_.get(
                                                  item,
                                                  "user.fullName"
                                                ).slice(0, 1)}
                                              </span>
                                            </Avatar>
                                          </div>
                                        </div>
                                      );
                                    }}
                                  </Draggable>
                                )}
                              </>
                            );
                          })}
                        </>
                      )}
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
        onNavigate={(data) => {
          if (onNavigate) onNavigate(data);
        }}
      />
    </div>
  );
}
