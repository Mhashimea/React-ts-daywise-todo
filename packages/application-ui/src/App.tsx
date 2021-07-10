import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./assets/ant-d.less";
import "./assets/css/base.css";
import "./assets/css/index.css";
import Router from "./Router";
import { GetUsers } from "./store/actions/index";
import { GetProjects, GetTeams } from "./store/actions/common";

function App() {
  const dispatch = useDispatch();

  const getCurrentProfile = async () => {
    dispatch(GetUsers());
    dispatch(GetTeams());
    dispatch(GetProjects());
  };
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
