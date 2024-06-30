"use client";
import React, { createContext, useState, useContext } from 'react';
import { SidebarContainer, SidebarLink, SidebarTitle, MenuIcon } from '../styles/Sidebarstyles.js';
import Link from 'next/link';

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}

function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <div>
      <MenuIcon
        onClick={toggleSidebar}
        style={{
          position: 'fixed',
          zIndex: '100',
          left: `${isSidebarOpen ? '210px' : '10px'}`,
          top: '20px',
          transition: 'left 0.3s ease-in-out',
        }}
      >
        <span></span>
      </MenuIcon>

      <SidebarContainer isOpen={isSidebarOpen}>
        <SidebarTitle>Geegl Finance</SidebarTitle>
        <Link href="/" passHref><SidebarLink>Home</SidebarLink></Link>
        <Link href="/accounts" passHref><SidebarLink>Accounts</SidebarLink></Link>
        <Link href="/dashboard" passHref><SidebarLink>Dashboard</SidebarLink></Link>
        <Link href="/settings" passHref><SidebarLink>Settings</SidebarLink></Link>
      </SidebarContainer>
    </div>
  );
}

export default Sidebar;
