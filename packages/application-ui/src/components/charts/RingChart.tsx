import { RingProgress } from "@ant-design/charts";
import React from "react";

const DemoRingProgress: React.FC = () => {
  const config = {
    height: 200,
    width: 200,
    autoFit: false,
    percent: 0.8,
    color: ["#ee786c", "#E8EDF3"],
  };
  return <RingProgress {...config} />;
};

export default DemoRingProgress;
