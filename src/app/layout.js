"use client";

import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/NavBar';
import Sidebar from './components/Sidebar';
import { SidebarProvider, useSidebar } from './components/SidebarContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </head>
      <body className={inter.className}>
        <SidebarProvider>
          <Content title={title}> 
            {children}
          </Content>
        </SidebarProvider>
      </body>
    </html>
  );
}

function Content({ children, title }) { //container for page-specific content
  const { isSidebarOpen } = useSidebar();

  return (
    <>
      <Navbar title={title} />
      <Sidebar />
      <main
        style={{
          marginLeft: isSidebarOpen ? '240px' : '40px',
          transition: 'margin-left 0.3s ease-in-out',
          padding: '20px',
        }}
      >
        {children}
      </main>
    </>
  );
}