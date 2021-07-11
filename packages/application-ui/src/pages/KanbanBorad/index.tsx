import * as React from "react";
import KanbanBoardHeader from "./KanbanBoardHeader";
import KanbanBoardFilter from "./KanbanBoardFilter";
import Board from "./Board";

export default function KanbanBoard() {
  return (
    <div className="kanban-board">
      <KanbanBoardHeader />
      <div className="flex">
        <div className="w-3/4">
          <KanbanBoardFilter />
          <Board />
        </div>
        <div className="w-1/4"></div>
      </div>
    </div>
  );
}
