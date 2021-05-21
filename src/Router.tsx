import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login/index";

// lazy loading
const Dashboard = lazy(() => import("./pages/Dashboard/index"));
const Todos = lazy(() => import("./pages/Todos/index"));
const Feeds = lazy(() => import("./pages/Feeds/index"));
const Reports = lazy(() => import("./pages/Reports/index"));

function RouterView() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Route component={Login} exact path="/" />
        <Route component={Dashboard} exact path="/dashboard" />
        <Route component={Todos} exact path="/todos" />
        <Route component={Feeds} exact path="/feeds" />
        <Route component={Reports} exact path="/reports" />
      </Suspense>
    </Router>
  );
}

export default RouterView;