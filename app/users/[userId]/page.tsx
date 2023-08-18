import UserPosts from '@/app/components/UserPosts';
import getUserPage from '@/app/lib/getUserPage';
import getUserPosts from '@/app/lib/getUserPosts';
import { Suspense } from 'react';
import type { Metadata } from 'next';

type Props = {
  params: { userId: string };
};

export const generateMetadata = async ({
  params: { userId },
}: Props): Promise<Metadata> => {
  const user: User = await getUserPage(userId);
  return {
    title: user.name,
    description: `this is the page for ${user.name}`,
  };
};

// params userId is what's used in dynamic routing [userId]
export default async function UserPage({ params: { userId } }: Props) {
  const user: User = await getUserPage(userId);
  const userPosts: UserPost[] = await getUserPosts(userId);
  return (
    <>
      <h2>{user.name}</h2>
      <p>{user.phone}</p>
      <Suspense fallback={<h1>Loading...</h1>}>
        <UserPosts userPosts={userPosts}></UserPosts>
      </Suspense>
    </>
  );
}
