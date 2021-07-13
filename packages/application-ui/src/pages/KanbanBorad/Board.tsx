import {
  ClockCircleOutlined,
  PaperClipOutlined,
  MessageOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";
import { Tag, Avatar } from "antd";
import * as React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Board() {
  const onDragEnd = (e: any) => {
    console.log(e);
  };
  return (
    <div className="board">
      <div className="board-list">
        <DragDropContext onDragEnd={onDragEnd}>
          {[1, 2, 3, 4].map((items) => {
            return (
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} className="board-list-item">
                    <h1 className="mb-3">Todo</h1>
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                      <Draggable
                        key={item}
                        draggableId={`item${item}`}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            className="board-list-item-data"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
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
                              Iellat atque vero nisi minima accusamus, ad
                              accusantium, dolorue vero nisi cor
                            </h2>
                            <div className="board-list-item-data-attach">
                              {(item === 0 || item === 3) && (
                                <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29kaW5nJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                              )}
                            </div>

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
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
}
