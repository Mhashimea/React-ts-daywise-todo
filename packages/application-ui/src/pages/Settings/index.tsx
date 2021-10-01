import React, { useState } from "react";
import Designation from "./components/Designation";
import "./style.css";
import classNames from "classnames";
import Construction from "../../components/ux/Construction";

export default function Settings() {
  const [tabState, setTabState] = useState(0);
  return (
    <div className="settings">
      <div className="settings-sidebar">
        <div
          onClick={() => setTabState(0)}
          className={classNames({
            "settings-sidebar-item": true,
            "settings-sidebar-item-active": tabState === 0,
          })}
        >
          <h1>Designation</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab facilis
            labore
          </p>
        </div>
        <div
          onClick={() => setTabState(1)}
          className={classNames({
            "settings-sidebar-item": true,
            "settings-sidebar-item-active": tabState === 1,
          })}
        >
          <h1>Departments</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab facilis
            labore illum soluta suscipit, incidunt quod quidem omnis!
            Consectetur?
          </p>
        </div>
        <div
          onClick={() => setTabState(2)}
          className={classNames({
            "settings-sidebar-item": true,
            "settings-sidebar-item-active": tabState === 2,
          })}
        >
          <h1>Account Settings</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab facilis
            labore illum
          </p>
        </div>
      </div>
      <div className="settings-data">
        {tabState === 0 && <Designation />}
        {(tabState === 1 || tabState === 2) && <Construction />}
      </div>
    </div>
  );
}
