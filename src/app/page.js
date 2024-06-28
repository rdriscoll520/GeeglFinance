'use client'
import './globals.css';
import Sidebar from "./components/Sidebar";
import Navbar from './components/NavBar';

export default function Home() {

  return (
      <div>
        <div>
        <Navbar />
        <Sidebar />
        </div>
      </div>

  );
}
