import { Tag } from "antd";
import React from "react";
import { generatestatuscolor } from "../../util/todo";

export default function QuickPicks() {
  return (
    <div className="quick-picks">
      <h1>Quick Pick</h1>
      {Array.from(Array(15), (i) => {
        return (
          <div className="quick-picks-item">
            <div className="quick-picks-item-header">
              <h2 className="flex-1 font-medium text-base">SRS Creation</h2>
              <Tag
                className="rounded-md"
                color={generatestatuscolor("Pending")}
              >
                Pending
              </Tag>
            </div>
            <p className="ellipse">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
              maxime hic molestiae dolorum nihil sit ducimus numquam accusantium
              at odit vel unde quia pariatur distinctio magnam facere eveniet.
              Ipsam, quidem.
            </p>
          </div>
        );
      })}
    </div>
  );
}
