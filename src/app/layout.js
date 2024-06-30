"use client";

import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/NavBar';
import Sidebar, { SidebarProvider, useSidebar } from './components/Sidebar';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children, title }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient ? (
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
    ) : <p></p>
  );
}

function Content({ children, title }) { 
  const { isSidebarOpen } = useSidebar();

  return (
    <>
      <Navbar title={title} />
      <Sidebar />
      <main
        style={{
          marginLeft: isSidebarOpen ? '200px' : '0px',
          transition: 'margin-left 0.3s ease-in-out',
          padding: '20px',
        }}
      >
        {children}
      </main>
    </>
  );
}
