import React from 'react'

const PostSkeleton = () => {
  return (
    <div className="card w-[20rem] mx-4 shadow-xl bg-[#1d1f26] border border-[#2D323C] hover:border-[#545A69]">
      <div className="flex flex-col gap-4 w-52">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  );
}

export default PostSkeleton