import React from 'react'
import PostAuthor from './PostAuthor';
import {Link} from 'react-router-dom'
import CustomButton from '../Button/CustomButton';

const PostItem = ({ post }) => {
  const { id, thumbnail, category, title, desc, authorID } = post
  const adjustedTitle = title.length > 30 ? title.substr(0, 30) + '...' : title;
  const adjustedDesc = desc.length > 85 ? desc.substr(0, 85) + "..." : desc;
  return (
    <div className="card w-[20rem] mx-4 shadow-xl bg-[#1d1f26] border border-[#2D323C] hover:border-[#545A69]">
      <figure className="p-3 rounded-xl">
        <img src={thumbnail} alt="Shoes" className=" rounded-xl" />
      </figure>
      <div className="card-body">
        <Link to={`details/posts/${id}`}>
          <h2 className="card-title text-white">
            {adjustedTitle}
            {/* <div className="badge badge-primary">NEW</div> */}
          </h2>
        </Link>
        <p>{adjustedDesc}</p>
        <div className="w-full mt-5 flex items-center justify-between">
          <PostAuthor />
          <Link to={`/posts/categories/${category}`}>
            <CustomButton padX={"px-[20px]"} padY={"py-[2px]"}>
              {category}
            </CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostItem