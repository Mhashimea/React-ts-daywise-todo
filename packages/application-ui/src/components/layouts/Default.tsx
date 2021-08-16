import React from "react";
import Navbar from "../ux/Navbar";
import Sidebar from "../ux/Sidebar";

interface LayoutProps {
  children?: any;
}

export default function Default({ children }: LayoutProps) {
  return (
    <div className="default h-full flex items-start overflow-hidden">
      <Sidebar />
      <div className="default-content overflow-hidden h-full">
        <Navbar />
        <div className="px-5 overflow-auto h-full mb-10">{children}</div>
      </div>
    </div>
  );
}
