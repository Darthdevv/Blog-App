import React, { useEffect, useState } from 'react'
import PostAuthor from './PostAuthor';
import {Link} from 'react-router-dom'
import CustomButton from '../Button/CustomButton';
import PostSkeleton from './PostSkeleton';

const PostItem = ({ post }) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    },1500)
  },[])

  const { _id: id, thumbnail, category, title, description, creator, createdAt } = post
  const adjustedTitle = title.length > 30 ? title.substr(0, 30) + '...' : title;
  const adjustedDesc = description.length > 85 ? description.substr(0, 85) + "..." : description;
  return (
    <>
      {loading ? (
        <PostSkeleton />
      ) : (
        <Link to={`details/posts/${id}`}>
          <div className="card w-[20rem] mx-4 shadow-xl bg-[#1d1f26] border border-[#2D323C] hover:border-[#545A69]">
            <figure className="p-3 rounded-xl">
              <img
                src={`https://blog-app-production-6e12.up.railway.app/uploads/${thumbnail}`}
                alt="Shoes"
                className=" rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">{adjustedTitle}</h2>

              <p dangerouslySetInnerHTML={{ __html: adjustedDesc }}></p>
              <div className="w-full mt-5 flex items-center justify-between">
                <PostAuthor creator={creator} createdAt={createdAt} />
                <Link to={`/posts/categories/${category}`}>
                  <CustomButton padX={"px-[20px]"} padY={"py-[2px]"}>
                    {category}
                  </CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default PostItem