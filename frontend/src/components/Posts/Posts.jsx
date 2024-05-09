import React, { useState } from 'react'
import PostItem from './PostItem';
import Thumbnail1 from '../../images///blog97.jpg';
import Thumbnail2 from '../../images///blog55.jpg';
import Thumbnail3 from '../../images///blog26.jpg';
import Thumbnail4 from '../../images///blog16.jpg';

const postData = [
  {
    id: "1",
    thumbnail: Thumbnail1,
    category: "education",
    title: "This is a title of the very first blog",
    desc: "lorem ipsum dolor sit amet, con",
    authorID: 1,
  },
  {
    id: "2",
    thumbnail: Thumbnail2,
    category: "science",
    title: "This is a title of the very second blog",
    desc: "lorem ipsum dolor sit amet, con",
    authorID: 2,
  },
  {
    id: "3",
    thumbnail: Thumbnail3,
    category: "art",
    title: "This is a title of the very third blog",
    desc: "lorem ipsum dolor sit amet, con",
    authorID: 3,
  },
  {
    id: "4",
    thumbnail: Thumbnail4,
    category: "agriculture",
    title: "This is a title of the very fourth blog",
    desc: "lorem ipsum dolor sit amet, con",
    authorID: 4,
  },
];

const Posts = () => {
  const [posts , setPosts] = useState(postData)
  return (
    <div className=' max-w-[1100px] mx-auto py-20 flex items-start justify-start max-lg:items-center max-lg:justify-center flex-wrap gap-y-8'>
      {posts.map((post) => (
        <PostItem key={post.id} post={post } />
        ))}
    </div>
  )
}

export default Posts