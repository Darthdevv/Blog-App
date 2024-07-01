import React, { useEffect, useState } from 'react'
import PostItem from './PostItem';
import { postData } from '../../utilities/data';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import PostAuthor from './PostAuthor';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://blog-app-production-6e12.up.railway.app/api/posts`
        );

        console.log(data);
        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }

    }

    getPosts();
  }, [])

  if (loading) {
    return <ClipLoader color="#4F45E4" size={55} />;
  }

  return (
    <div className=" max-w-[1100px] min-h-screen mx-auto py-20 flex items-start justify-start max-lg:items-center max-lg:justify-center flex-wrap gap-y-8">
      {posts.length > 0 ? (
        posts.map((post) => <PostItem key={post._id} post={post}/>)
      ) : (
        <p>No Posts Found 🤦🏻‍♂️</p>
      )}
    </div>
  );
}

export default Posts