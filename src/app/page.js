'use client'
import React, { useState } from "react";
import './globals.css';
import { SidebarContainer, SidebarLink, SidebarTitle, MenuIcon } from './styles/Sidebarstyles.js';
import Link from 'next/link';

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <MenuIcon
        onClick={toggleSidebar}
        style={{
          position: 'fixed',
          zIndex: '100',
          left: `${isSidebarOpen ? '250px' : '10px'}`,
          top: '10px',
        }}
      >
        <span></span>
      </MenuIcon>

      <SidebarContainer isOpen={isSidebarOpen}>
        <SidebarTitle>Sidebar Title</SidebarTitle>
        <Link href="/" passHref><SidebarLink>Home</SidebarLink></Link>
        <Link href="/accounts" passHref><SidebarLink>Accounts</SidebarLink></Link>
      </SidebarContainer>

      <div
        style={{
          marginLeft: `${isSidebarOpen ? '250px' : '0'}`,
          padding: '20px',
          transition: 'margin-left 0.3s ease-in-out',
        }}
      >
        <h1>Balance: </h1>
      </div>
    </div>
  );
}
