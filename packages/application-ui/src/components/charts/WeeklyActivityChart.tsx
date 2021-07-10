import { Column } from '@ant-design/charts';
import React from 'react';

const DemoColumn: React.FC = () => {
  const data = [
    {
      type: 'Classification One',
      values: [76, 100],
    },
    {
      type: 'Classification Two',
      values: [56, 108],
    },
    {
      type: 'Classification Three',
      values: [38, 129],
    },
    {
      type: 'Classification Four',
      values: [58, 155],
    },
    {
      type: 'Classification Five',
      values: [45, 120],
    },
    {
      type: 'Classification Six',
      values: [23, 99],
    },
    {
      type: 'Classification Seven',
      values: [18, 56],
    },
    {
      type: 'Classification Eight',
      values: [18, 34],
    },
  ];
  const config = {
    data: data,
    xField: 'type',
    yField: 'values',
    isRange: true,
    minColumnWidth: 20,
    maxColumnWidth: 20,
    columnStyle: {
      radius: [20, 20, 20, 20],
    },
    color: '#ee786c',
  };
  return <Column {...config} />;
};

export default DemoColumn;
