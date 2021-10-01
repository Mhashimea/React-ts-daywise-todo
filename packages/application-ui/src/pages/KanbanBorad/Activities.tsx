import moment from "moment";
import React from "react";

export default function Activities({ activities }) {
  return (
    <div className="activities">
      <div className="activities-list">
        {activities.map((act) => {
          return (
            <div className="activities-list-item">
              {/* <div className="mr-3">
                <Avatar src={act.profile.avatar}></Avatar>
              </div> */}
              <div>
                <div className="flex items-center mb-2">
                  <div className="activities-list-item-activity">
                    <p>{act.text}</p>
                    <span>{moment(act.createdAt).fromNow()}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
