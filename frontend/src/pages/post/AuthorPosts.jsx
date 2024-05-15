import React, { useState } from "react";
import PostItem from "../../components/Posts/PostItem";
import { postData } from "../../utilities/data";

const AuthorPosts = () => {
  const [posts, setPosts] = useState(postData);
  return (
    <div className=" max-w-[1100px] mx-auto py-20 flex items-start justify-start max-lg:items-center max-lg:justify-center flex-wrap gap-y-8">
      {posts.length > 0 ? (
        posts.map((post) => <PostItem key={post.id} post={post} />)
      ) : (
        <p>No Posts Found 🤦🏻‍♂️</p>
      )}
    </div>
  );
};

export default AuthorPosts;
