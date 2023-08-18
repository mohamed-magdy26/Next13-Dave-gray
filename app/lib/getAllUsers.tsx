const getAllUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!res.ok) throw new Error('faild to fetch users');

  return res.json();
};

export default getAllUsers;
