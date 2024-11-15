import Link from 'next/link';
import Image from 'next/image';

export default function Header(){
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
        <Image 
        className='logo-items'
            src="/logo.png" 
            alt='logo image'
            width={70} 
            height={70} />
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/product">Products</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};