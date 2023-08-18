import Link from 'next/link';
import getAllUsers from '../lib/getAllUsers';
const Users = async () => {
  const userData: User[] = await getAllUsers();
  const content = (
    <section className='bg-gray-200 text-2xl text-center text-red-500 flex-1'>
      <h2>
        <Link href='/'>Back To Home</Link>
      </h2>
      <br />
      <div className='flex flex-wrap gap-4 justify-center'>
        {userData.map((user) => {
          return (
            <div
              key={user.id}
              className='px-4 py-1 bg-red-300 text-white rounded-md '
            >
              <Link href={`users/${user.id}`}>{user.name}</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
  return content;
};

export default Users;
