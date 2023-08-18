type props = {
  userPosts: UserPost[];
};
const UserPosts = async ({ userPosts: posts }: props) => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserPosts;
