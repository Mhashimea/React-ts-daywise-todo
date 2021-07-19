import * as React from "react";
import Board from "./Board";
import KanbanBoardFilter from "./KanbanBoardFilter";
import KanbanBoardHeader from "./KanbanBoardHeader";

export default function KanbanBoard() {
  return (
    <div className="kanban-board">
      <KanbanBoardHeader />
      <div className="kanban-board-wrapper">
        <KanbanBoardFilter />
        <Board />
      </div>
    </div>
  );
}
