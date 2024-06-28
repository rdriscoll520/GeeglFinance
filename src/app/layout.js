"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
      <Navbar />
      <Sidebar />
        {children}
      </body>
    </html>
  );
}
