import React from 'react'

const PostItem = ({post}) => {
  return (
    <div className="card w-[20rem] mx-4 shadow-xl bg-[#1D1F26] border border-[#2D323C]">
      <figure className="p-3 rounded-xl">
        <img src={post.thumbnail} alt="Shoes" className=" rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
}

export default PostItem