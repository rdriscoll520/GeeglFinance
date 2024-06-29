import React, { useState } from "react";
import { SidebarContainer, SidebarLink, SidebarTitle, MenuIcon } from '../styles/Sidebarstyles.js'; // Adjust the import path as necessary
import Link from 'next/link';

function Sidebar() {
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
          left: `${isSidebarOpen ? '210px' : '10px'}`,
          top: '10px',
          transition: 'margin-left 0.3s ease-in-out',
        }}
      >
        <span></span>
      </MenuIcon>

      <SidebarContainer isOpen={isSidebarOpen}>
        <SidebarTitle>Geegl Finance</SidebarTitle>
        <Link href="/" passHref><SidebarLink>Home</SidebarLink></Link>
        <Link href="/accounts" passHref><SidebarLink>Accounts</SidebarLink></Link>
      </SidebarContainer>

      <div
        style={{
          marginLeft: `${isSidebarOpen ? '240px' : '40px'}`,
          padding: '20px',
          transition: 'margin-left 0.3s ease-in-out',
        }}
      >
      </div>
    </div>
  );
}

export default Sidebar;
