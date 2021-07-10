import React from "react";

interface CardProps {
  className?: string;
  title?: string;
  img?: string;
  count?: number;
}

export default function DashboardCard({
  className,
  title,
  count,
  img,
}: CardProps) {
  return (
    <div className={"dashboard-card " + className}>
      <img src={img} alt="" />
      <div className="ml-5">
        <span className="text-sm text-gray-600">{title}</span>
        <h1 className="text-xl text-gray-900 font-semibold">{count || 0}</h1>
      </div>
    </div>
  );
}
