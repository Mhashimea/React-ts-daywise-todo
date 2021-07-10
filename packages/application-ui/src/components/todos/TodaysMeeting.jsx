import { Card, Tag } from "antd";
import React from "react";

export default function TodaysMeeting() {
  return (
    <Card className="rounded-md mt-3">
      <h1 className="text-base font-semibold flex-1">
        Today's Meetings <span className="text-xs">(22/05/2021)</span>
      </h1>
      <p className="text-xs text-gray-500 pb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa
        nesciunt illo alias ut, quas similique assumenda unde aliq
      </p>
      <div className="max-h-72 overflow-auto border-t">
        {Array.from(Array(10), (i) => {
          return (
            <div className="flex items-center my-5" key={i}>
              <div className="flex-1">
                <h1>Meeting with new client</h1>
                <span className="text-xs text-gray-500 mr-2">Google Meet:</span>
                <a className="primary-color" href="#">
                  https:googlemeet.com
                </a>
              </div>
              <Tag className="rounded-md">10 am</Tag>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
