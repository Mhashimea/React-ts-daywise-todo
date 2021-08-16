import { Modal } from "antd";
import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodoForm from "../../components/forms/AddTodoForm";
import Loader from "../../components/ux/Loader";
import { AddTodos, GetTodos } from "../../store/actions/todos";
import Board from "./Board";
import KanbanBoardFilter from "./KanbanBoardFilter";
import KanbanBoardHeader from "./KanbanBoardHeader";

export default function KanbanBoard() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>({});
  const [dataLoaing, setDataLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({
    projectId: null,
    priority: null,
    status: null,
  });
  const teams = useSelector((state: any) => state.CommonReducer.teams);
  const projects = useSelector((state: any) => state.CommonReducer.projects);
  const todos = useSelector((state: any) => state.TodosReducer.todos);

  const saveTodo = async (e, status?: string) => {
    setLoading(true);
    e.status = status ? status : "Todo";
    e.projectId = selectedProject.id;
    const response: any = await dispatch(AddTodos(e));
    if (response.success) {
      setVisible(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (projects && projects.length > 0) {
      setSelectedProject(projects[0]);
      setFilter({ ...filter, projectId: projects[0].id });
    }
  }, [projects]);

  useEffect(() => {
    async function getData() {
      if (filter.projectId) {
        await dispatch(GetTodos(filter));
        setDataLoading(false);
      }
    }
    getData();
  }, [filter]);

  return (
    <div className="kanban-board">
      {projects && projects.length > 0 && (
        <KanbanBoardHeader projects={projects} selectedProj={projects[0]} />
      )}
      <div className="kanban-board-wrapper">
        <KanbanBoardFilter
          onAddNew={() => setVisible(true)}
          onChangePriority={(e) => setFilter({ ...filter, priority: e })}
          onChangeStatus={(e) => setFilter({ ...filter, status: e })}
        />
        {dataLoaing ? (
          <Loader />
        ) : (
          <Board
            todos={todos || []}
            onAddNew={() => setVisible(true)}
            onUpdateStatus={(data, status) => saveTodo(data, status)}
            onNavigate={(e) => console.log(e)}
          />
        )}
      </div>
      <Modal
        visible={visible}
        title="Add New Task"
        footer={null}
        onCancel={() => setVisible(false)}
        width={"700px"}
      >
        <AddTodoForm
          onSave={(e) => saveTodo(e)}
          onCancel={() => setVisible(false)}
          initialValues={{ priority: "High" }}
          teams={teams}
          modalState={visible}
          loading={loading}
        />
      </Modal>
    </div>
  );
}
