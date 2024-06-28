import Link from 'next/link';

function Navbar( {children} ) {
  return (
    <nav className="nav">
      <div className="site-title">
        <Link legacyBehavior href="/">Finance Tracker</Link>
      </div>
      <div className="links">
        <Link legacyBehavior href="/accounts"><a>Accounts</a></Link>
        <Link legacyBehavior href="/dashboard"><a>Dashboard</a></Link>
        <Link legacyBehavior href="/settings"><a>Settings</a></Link>
      </div>
    </nav>
  );
}

export default Navbar;
