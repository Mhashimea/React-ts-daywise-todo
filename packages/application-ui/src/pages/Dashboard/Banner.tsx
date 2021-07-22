import React from 'react';
import DashboardBanner from '../../assets/images/svg/men-with-laptop.svg';

export default function Banner() {
  return (
    <div className="banner p-3">
      <div className="flex-1">
        <p className="text-sm text-gray-400">Good Morning Muhhamed Hashim</p>
        <h1 className="text-white font-medium text-xl mt-1">
          Check Your Daily Tasks & Schedules
        </h1>
      </div>
      <img src={DashboardBanner} alt="" />
    </div>
  );
}
