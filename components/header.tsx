
import Link from 'next/link';
import "../styles/global.css";


function Navigation() {
  return (
    <nav className='flex flex-col md:flex-row items-center justify-between ' >
      <span>Meniu Mobile</span>
      <img src="https://picsum.photos/50/50"></img>
      <ul className='flex gap-8'>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/store">Store</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;