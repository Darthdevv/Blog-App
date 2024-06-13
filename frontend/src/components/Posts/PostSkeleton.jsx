import React from 'react'

const PostSkeleton = () => {
  return (
    <div className="card pl-3 pr-20 pt-3 pb-9 w-[20rem] mx-4 shadow-xl bg-[#1d1f26] border border-[#2D323C] hover:border-[#545A69]">
      <div className="flex flex-col gap-4 w-72 mx-auto">
        <div className="skeleton h-44 w-full mb-5"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full mb-5"></div>
        <div className="flex gap-4 items-center">
          <div className="skeleton w-10 h-10 rounded-xl shrink-0"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostSkeleton