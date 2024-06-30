import Link from 'next/link';

function Navbar( {title, marL} ) {

  return (
    <nav className="nav">
      <div
        className="site-title"
        style={{
          marginLeft: marL,
          transition: 'margin-left 0.3s ease-in-out',
        }}
      >
        <Link href="/">{title}</Link>
      </div>
      <div className="links">
        <Link href="/" className='link'>Home</Link>
        <Link href="/accounts" className='link'>Accounts</Link>
        <Link href="/dashboard" className='link'>Dashboard</Link>
        <Link href="/settings" className='link'>Settings</Link>
      </div>
    </nav>
  );
}

export default Navbar;
