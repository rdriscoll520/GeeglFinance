import Link from 'next/link';

function Navbar( {title} ) {

  return (
    <nav className="nav">
      <div className="site-title">
        <Link href="/page">{title}</Link>
      </div>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/accounts">Accounts</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/settings">Settings</Link>
      </div>
    </nav>
  );
}

export default Navbar;
