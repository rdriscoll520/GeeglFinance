"use client"
import React from 'react';
import { SidebarContainer, SidebarLink, SidebarTitle, MenuIcon } from '../styles/Sidebarstyles.js';
import Link from 'next/link';
import { useSidebar } from './SidebarContext.js';

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
          transition: 'margin-left 0.3s ease-in-out',
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
