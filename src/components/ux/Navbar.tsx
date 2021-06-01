import {
  AreaChartOutlined,
  CheckCircleOutlined,
  FileTextOutlined,
  UnorderedListOutlined,
  UsergroupAddOutlined
} from '@ant-design/icons';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { post } from '../../services/http-request';
import './style.css';

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar mb-5">
      <ul>
        <Link
          to="/dashboard"
          className={
            location.pathname === '/dashboard'
              ? 'flex items-center text-sm hover:text-white navbar-active'
              : 'flex items-center text-sm hover:text-white'
          }
        >
          <UnorderedListOutlined className="mr-2 text-sm" />
          <li>Dashboard</li>
        </Link>

        <Link
          to="/todos"
          className={
            location.pathname === '/todos'
              ? 'flex items-center text-sm hover:text-white navbar-active'
              : 'flex items-center text-sm hover:text-white'
          }
        >
          <CheckCircleOutlined className="mr-2 text-sm" />
          <li>Todos</li>
        </Link>

        <Link
          to="/projects"
          className={
            location.pathname === '/projects'
              ? 'flex items-center text-sm hover:text-white navbar-active'
              : 'flex items-center text-sm hover:text-white'
          }
        >
          <FileTextOutlined className="mr-2 text-sm" />
          <li>Projects</li>
        </Link>

        <Link
          to="/teams"
          className={
            location.pathname === '/teams'
              ? 'flex items-center text-sm hover:text-white navbar-active'
              : 'flex items-center text-sm hover:text-white'
          }
        >
          <UsergroupAddOutlined className="mr-2 text-sm" />
          <li>Teams</li>
        </Link>

        <Link
          to="/reports"
          className={
            location.pathname === '/report'
              ? 'flex items-center text-sm hover:text-white navbar-active'
              : 'flex items-center text-sm hover:text-white'
          }
        >
          <AreaChartOutlined className="text-sm mr-2" />
          <li>Report</li>
        </Link>
      </ul>
    </div>
  );
}
