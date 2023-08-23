import Link from 'next/link';
import Search from './Search';

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className='bg-teal-800 p-4 text-teal-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link className='font-bold text-2xl' href='/'>
          Logo
        </Link>
        {/* Search component */}
        <Search />
      </div>
    </nav>
  );
}
