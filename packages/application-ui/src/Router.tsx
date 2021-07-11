import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Default from "./components/layouts/Default";
import Loader from "./components/ux/Loader";
import Login from "./pages/Login/index";
import Register from "./pages/Regster";

// lazy loading
const Dashboard = lazy(() => import("./pages/Dashboard/index"));
const Todos = lazy(() => import("./pages/Todos/index"));
const Projects = lazy(() => import("./pages/Projects/index"));
const Reports = lazy(() => import("./pages/Reports/index"));
const Teams = lazy(() => import("./pages/Teams/index"));
const TodosView = lazy(() => import("./pages/Todos/id"));
const KanbanBoard = lazy(() => import("./pages/KanbanBorad/index"));

function RouterView() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Route component={Login} exact path="/" />
        <Route component={Register} exact path="/register" />
        <Default>
          <Route component={Dashboard} exact path="/dashboard" />
          <Route component={Todos} exact path="/todos" />
          <Route component={TodosView} exact path="/todos/:id" />
          <Route component={Projects} exact path="/projects" />
          <Route component={Reports} exact path="/reports" />
          <Route component={Teams} exact path="/teams" />
          <Route component={KanbanBoard} exact path="/kanban-board" />
        </Default>
      </Suspense>
    </Router>
  );
}

export default RouterView;
