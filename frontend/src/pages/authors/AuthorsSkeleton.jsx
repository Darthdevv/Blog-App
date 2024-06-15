import React from 'react'

const AuthorsSkeleton = () => {
  return (

          <div className="stats px-24 py-[10px] bg-[#1d1f26] border border-[#2D323C] hover:border-[#545A69] lg:ml-20 md:ml-10 sm:ml-20 m-5 shadow text-center">
            <div className="flex flex-col gap-4 items-center">
              <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
              <div className="flex flex-col gap-4">
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton self-center h-4 w-10"></div>
              </div>
            </div>
          </div>
  );
}

export default AuthorsSkeleton