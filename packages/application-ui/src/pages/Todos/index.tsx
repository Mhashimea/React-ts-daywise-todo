import { FilterOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Modal } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import DatePicker from "../../components/datepicker";
import AddMeetingForm from "../../components/forms/AddMeetingForm";
import AddTodoForm from "../../components/forms/AddTodoForm";
import TodaysMeeting from "../../components/todos/TodaysMeeting";
import TodaysPerfomance from "../../components/todos/TodaysPerfomance";
import TodoCard from "../../components/ux/TodoCard";
import { AddTodos, GetTodos, UpdateTodos } from "../../store/actions/todos";

const socket = io("http://localhost:8080", {
  forceNew: true,
  transports: ["websocket"],
});

export default function Todos() {
  const dispatch = useDispatch();
  const [priority, setPriority] = useState<any>("Priority");
  const [status, setStatus] = useState<any>("All");
  const [project, setProject] = useState<any>("All");
  const [modalState, setModalState] = useState<any>(null);

  const todos = useSelector((state: any) => state.TodosReducer.todos);
  const teams = useSelector((state: any) => state.CommonReducer.teams);

  const priorityMenu = (
    <Menu onClick={(e) => setPriority(e.key)}>
      <Menu.Item key="Priority">
        <span>All</span>
      </Menu.Item>
      <Menu.Item key="High">
        <span>High</span>
      </Menu.Item>
      <Menu.Item key="Medium">Medium</Menu.Item>
      <Menu.Item key="Low">Low</Menu.Item>
    </Menu>
  );

  const statusMenu = (
    <Menu onClick={(e) => setStatus(e.key)}>
      <Menu.Item key="All">
        <span>All</span>
      </Menu.Item>
      <Menu.Item key="Completed">
        <span>Completed</span>
      </Menu.Item>
      <Menu.Item key="Pending">
        <span>Pending</span>
      </Menu.Item>
    </Menu>
  );

  const projectMenu = (
    <Menu onClick={(e) => setProject(e.key)}>
      <Menu.Item key="All">
        <span>All</span>
      </Menu.Item>
      <Menu.Item key="Project 1">
        <span>Project 1</span>
      </Menu.Item>
      <Menu.Item key="Project 2">
        <span>Project 2</span>
      </Menu.Item>
    </Menu>
  );

  const buttonMenu = (
    <Menu onClick={(e) => setModalState(e.key)}>
      <Menu.Item key="todo">
        <span>Todo</span>
      </Menu.Item>
      <Menu.Item key="meeting">
        <span>Meeting</span>
      </Menu.Item>
    </Menu>
  );

  const saveTodo = async (payload: any) => {
    const response: any = await dispatch(AddTodos({ payload: payload }));
    if (response.success) {
      setModalState(null);
    }
  };

  const onUpdateTodo = async (evt: any, data: any) => {
    const checked = evt.target.checked;
    data["status"] = checked ? "COMPLETED" : "INPROGRESS";
    await dispatch(UpdateTodos({ payload: data }));
  };

  const emitUpdateTodo = () => {
    socket.on("emit-todo:update", (data) => {
      dispatch({ type: "UPDATE_TODO", payload: data });
      dispatch(GetTodos());
    });
  };

  useEffect(() => {
    dispatch(GetTodos());
  }, []);

  return (
    <div className="todos">
      <Dropdown.Button
        overlay={buttonMenu}
        type="primary"
        trigger={["click"]}
        className="rounded-md"
      >
        Add New Item
      </Dropdown.Button>

      <div className="mt-5 flex">
        <div className="w-2/3">
          <DatePicker emitDate={(e: any) => console.log(e)} />
          <div className="todos-tasks mt-5">
            <div className="flex items-center">
              <h1 className="text-base font-semibold flex-1">Tasks</h1>
              <div className="flex items-center">
                <Dropdown
                  overlay={priorityMenu}
                  trigger={["click"]}
                  className="mr-2"
                >
                  <Button className="rounded-md flex items-center">
                    <FilterOutlined className="text-sm" />
                    {priority}
                  </Button>
                </Dropdown>
                <Dropdown overlay={statusMenu} trigger={["click"]}>
                  <Button className="rounded-md flex items-center">
                    <FilterOutlined className="text-sm" />
                    {status}
                  </Button>
                </Dropdown>
                <Dropdown
                  overlay={projectMenu}
                  trigger={["click"]}
                  className="ml-2"
                >
                  <Button className="rounded-md flex items-center">
                    <FilterOutlined className="text-sm" />
                    {project}
                  </Button>
                </Dropdown>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              voluptatibus harum? Totam accusamus architecto eveniet doloribus
              expedita, reprehenderit, optio sit quos quidem hic quasi,
              explicabo quas aliquam saepe quia itaque?
            </p>
            <div className="mt-5">
              {todos &&
                todos.length &&
                todos.map((item: any, index: number) => {
                  return (
                    <TodoCard
                      key={index}
                      data={item}
                      onChangeTodo={onUpdateTodo}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        <div className="w-1/3 ml-3">
          <TodaysPerfomance />
          <TodaysMeeting />
        </div>
      </div>

      <Modal
        visible={modalState !== null}
        title="Add New Item"
        footer={null}
        onCancel={() => setModalState(null)}
      >
        {modalState === "todo" ? (
          <AddTodoForm
            onSave={(e) => saveTodo(e)}
            onCancel={() => setModalState(null)}
            initialValues={{ date: moment(), priority: "high" }}
            teams={teams}
            modalState={modalState}
          />
        ) : (
          <AddMeetingForm onCancel={() => setModalState(null)} />
        )}
      </Modal>
    </div>
  );
}
