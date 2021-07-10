import React, { useState, useEffect } from "react"
import { Progress } from "@ant-design/charts"

const ProgressChart: React.FC<{ color?: string }> = ({ color = "#5B8FF9" }) => {
  var config = {
    height: 10,
    autoFit: true,
    percent: 0.7,
    color: [`${color}`, "#E8EDF3"],
    barWidthRatio: 0.5,
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
  }
  return <Progress {...config} />
}

export default ProgressChart
