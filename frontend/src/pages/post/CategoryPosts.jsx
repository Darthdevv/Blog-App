import React, { useState, useEffect } from "react";
import PostItem from "../../components/Posts/PostItem";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";

const CategoryPosts = () => {

  const { category } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCategoryPosts = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://blog-app-production-6e12.up.railway.app/api/posts/categories/${category}`
        );

        console.log(data);
        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getCategoryPosts();
  }, [category])

  if (loading) {
    return (
      <div className=" max-w-[1100px] min-h-screen mx-auto py-20 flex items-center justify-center max-lg:items-center max-lg:justify-center flex-wrap gap-y-8">
        <ClipLoader color="#4F45E4" size={55} />
      </div>
    );
  }

  return (
    <div className=" max-w-[1100px] min-h-screen mx-auto py-20 flex items-center justify-center max-lg:items-center max-lg:justify-center flex-wrap gap-y-8">
      {posts.length > 0 ? (
        posts.map((post) => <PostItem key={post.id} post={post} />)
      ) : (
        <p>No Posts Found 🤦🏻‍♂️</p>
      )}
    </div>
  );
};

export default CategoryPosts;
