import React from 'react'
import { useEffect, useState } from 'react'
import AuthorsSkeleton from "./AuthorsSkeleton";
import { Link } from 'react-router-dom';

const AuthorItem = ({author}) => {

  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFetching(false);
    }, 1500);
  }, [])

  const { _id: id, name, avatar, posts } = author;

  return (
    <>
      {fetching ? (
        <AuthorsSkeleton />
      ) : (
        <Link to={`/posts/users/${id}`}>
          <div className="stats bg-[#1d1f26] border border-[#2D323C] hover:border-[#545A69] lg:ml-20 md:ml-10 sm:ml-20 m-5 shadow text-center">
            <div className="stat w-[300px]">
              <div className="stat-figure text-secondary">
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img
                      src={`${import.meta.env.VITE_ASSETS_URL}/uploads/${avatar}`}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="stat-title text-white">{name}</div>
              <div className=" text-md ">{posts}</div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default AuthorItem