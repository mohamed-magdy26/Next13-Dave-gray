'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

type Props = {};

const Search = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/${searchTerm}/`);
    setSearchTerm('');
  };
  return (
    <form onSubmit={handleSubmit} className='flex items-center space-x-4'>
      <input
        className='rounded-md text-black outline-none px-2 py-1 text-base'
        type='search'
        placeholder='Search....'
        value={searchTerm}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(e.target.value)
        }
      />
      <button className='bg-teal-100 text-teal-950 rounded-2xl py-1 px-5'>
        🚀
      </button>
    </form>
  );
};

export default Search;
