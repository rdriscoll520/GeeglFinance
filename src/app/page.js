'use client'
import React, { useState } from "react";
import './globals.css';
import Sidebar from "./components/Sidebar";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
      <div>
        <Sidebar />
        <h1>Balance: </h1>
      </div>
  );
}
