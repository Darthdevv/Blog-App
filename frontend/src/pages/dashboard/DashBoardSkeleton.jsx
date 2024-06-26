import React from 'react'

const DashBoardSkeleton = () => {
  return (
    <div className="w-full p-2 my-4 max-md:my-6 bg-[#1d1f26] border border-[#2D323C] hover:border-[#545A69] rounded-md">
      <div className="flex flex-row gap-4 items-center justify-between max-md:flex-wrap max-md:text-sm max-md:justify-center">
        <div className="flex items-center justify-between gap-4">
          <div className="skeleton h-14 w-20"></div>
          <div className="skeleton h-4 w-56 max-sm:w-28"></div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="skeleton h-12 w-[68px]"></div>
          <div className="skeleton h-12 w-[68px]"></div>
          <div className="skeleton h-12 w-[68px]"></div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardSkeleton