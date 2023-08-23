import React from 'react';
import getWikiResults from '../lib/getWikiResults';
import Image from 'next/image';
import type { Metadata } from 'next';

export const generateMetadata = async ({
  params: { searchTerm },
}: Props): Promise<Metadata> => {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll('%20', ' ');
  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} not found`,
    };
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
};

type Props = {
  params: {
    searchTerm: string;
  };
};
const SearchPage = async ({ params: { searchTerm } }: Props) => {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const results: Page[] | undefined = data.query?.pages;

  return (
    <main className='flex-1 bg-gray-950 text-white'>
      <div className='container mx-auto flex flex-col items-center justify-center'>
        <h1>Results for {searchTerm.replaceAll('%20', ' ')}</h1>
        <div className='flex flex-col gap-4'>
          {results ? (
            Object.values(results).map((result) => (
              <article key={result.pageid} className='grid grid-flow-col gap-4'>
                <Image
                  src={result.thumbnail?.source}
                  alt=''
                  width={100}
                  height={100}
                />
                <div className='grid gap-2'>
                  <h2>{result.title}</h2>
                  <p>{result.extract}</p>
                </div>
              </article>
            ))
          ) : (
            <p className='text-red-600 text-2xl font-bold'>
              {searchTerm} not Found
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
