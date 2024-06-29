"use client"
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/NavBar';
import Sidebar from './components/Sidebar';

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
        <Navbar title={title} />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
