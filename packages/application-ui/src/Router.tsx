import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Default from "./components/layouts/Default";
import Loader from "./components/ux/Loader";
import Login from "./pages/Login/index";
import Register from "./pages/Register";

// lazy loading
const Dashboard = lazy(() => import("./pages/Dashboard/index"));
const Todos = lazy(() => import("./pages/Todos/index"));
const Projects = lazy(() => import("./pages/Projects/index"));
const Reports = lazy(() => import("./pages/Reports/index"));
const Teams = lazy(() => import("./pages/Teams/index"));
const TodosView = lazy(() => import("./pages/Todos/id"));
const KanbanBoard = lazy(() => import("./pages/KanbanBorad/index"));
const TaskView = lazy(() => import("./pages/KanbanBorad/id"));
const Connect = lazy(() => import("./pages/Connect/index"));
const ConnectView = lazy(() => import("./pages/Connect/id/index"));
const CompanyProfile = lazy(() => import("./pages/Company-profile/index"));
const Settings = lazy(() => import("./pages/Settings/index"));
const Chat = lazy(() => import("./pages/Chat/index"));

//Variables
const isAuth = localStorage.getItem("isAuth");
const token = localStorage.getItem("token");

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth && token ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      )
    }
  />
);

const NotAuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuth || !token ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/dashboard",
          }}
        />
      )
    }
  />
);

function RouterView() {
  return (
    <Router>
      <Switch>
        <NotAuthenticatedRoute component={Login} exact path="/" />
        <NotAuthenticatedRoute component={Register} exact path="/register" />
        <Default>
          <Suspense fallback={<Loader />}>
            <PrivateRoute
              path="/dashboard"
              component={Dashboard}
            ></PrivateRoute>
            <PrivateRoute component={Todos} exact path="/todos" />
            <PrivateRoute component={TodosView} exact path="/todos/:id" />
            <PrivateRoute component={Projects} exact path="/projects" />
            <PrivateRoute component={Teams} exact path="/teams" />
            <PrivateRoute component={Reports} exact path="/reports" />
            <PrivateRoute component={KanbanBoard} exact path="/kanban-board" />
            <PrivateRoute component={TaskView} exact path="/kanban-board/:id" />
            <PrivateRoute component={Connect} exact path="/connect" />
            <PrivateRoute component={ConnectView} exact path="/connect/:id" />
            <PrivateRoute
              component={CompanyProfile}
              exact
              path="/company-profile"
            ></PrivateRoute>
            <PrivateRoute
              component={Settings}
              exact
              path="/settings"
            ></PrivateRoute>
            <PrivateRoute component={Chat} exact path="/chat"></PrivateRoute>
          </Suspense>
        </Default>
      </Switch>
    </Router>
  );
}

export default RouterView;
