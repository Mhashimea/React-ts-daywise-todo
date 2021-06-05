import { Liquid } from '@ant-design/charts';
import React from 'react';

const TodaysPerfomaceChart: React.FC = () => {
  var config = {
    percent: 0.25,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: { length: 128 },
  };
  return <Liquid {...config} height={250} />;
};

export default TodaysPerfomaceChart;