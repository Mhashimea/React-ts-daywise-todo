import { Modal } from "antd";
import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import AddTodoForm from "../../components/forms/AddTodoForm";
import Board from "./Board";
import KanbanBoardFilter from "./KanbanBoardFilter";
import KanbanBoardHeader from "./KanbanBoardHeader";

export default function KanbanBoard() {
  const [visible, setVisible] = useState(false);
  const teams = useSelector((state: any) => state.CommonReducer.teams);
  const projects = useSelector((state: any) => state.CommonReducer.projects);

  const saveTodo = (e) => {
    console.log(e);
  };
  return (
    <div className="kanban-board">
      {projects && projects.length > 0 && (
        <KanbanBoardHeader projects={projects} selectedProj={projects[0]} />
      )}
      <div className="kanban-board-wrapper">
        <KanbanBoardFilter />
        <Board />
      </div>
      <Modal
        visible={visible}
        title="Add New Task"
        footer={null}
        onCancel={() => setVisible(false)}
      >
        <AddTodoForm
          onSave={(e) => saveTodo(e)}
          onCancel={() => setVisible(false)}
          initialValues={{ priority: "high" }}
          teams={teams}
          projects={projects}
          modalState={visible}
        />
      </Modal>
    </div>
  );
}
