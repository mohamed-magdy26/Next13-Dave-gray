import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className='flex justify-between bg-rose-500 text-2xl p-[1em_10vw] text-white'>
      <Link href='/'>Logo</Link>
      <ul className='flex gap-4'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/users'>Users</Link>
        </li>
      </ul>
    </nav>
  );
}
