import {
  AreaChartOutlined,
  CheckCircleOutlined,
  MessageOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar mb-5">
      <ul>
        <Link
          to="/dashboard"
          className="flex items-center text-sm hover:text-white"
        >
          <UnorderedListOutlined className="mr-2 text-sm" />
          <li>Dashboard</li>
        </Link>

        <Link
          to="/todos"
          className="flex items-center text-sm hover:text-white"
        >
          <CheckCircleOutlined className="mr-2 text-sm" />
          <li>Todos</li>
        </Link>

        <Link
          to="/feeds"
          className="flex items-center text-sm hover:text-white"
        >
          <MessageOutlined className="mr-2 text-sm" />
          <li>Feed</li>
        </Link>

        <Link
          to="/reports"
          className="flex items-center text-sm hover:text-white"
        >
          <AreaChartOutlined className="text-sm mr-2" />
          <li>Report</li>
        </Link>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
}
