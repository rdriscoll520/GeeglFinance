import Link from 'next/link';

function Navbar({ children }) {
  return (
    <nav className="nav">
      <div className="site-title">
        <Link href="/">Finance Tracker</Link>
      </div>
      <div className="links">
        <Link href="/accounts">Accounts</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/settings">Settings</Link>
      </div>
    </nav>
  );
}

export default Navbar;
