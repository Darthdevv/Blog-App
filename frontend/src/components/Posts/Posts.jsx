import React, { useState } from 'react'
import PostItem from './PostItem';
import Thumbnail1 from '../../images///blog97.jpg';
import Thumbnail2 from '../../images///blog53.jpg';
import Thumbnail3 from '../../images///blog17.jpg';
import Thumbnail4 from '../../images///blog16.jpg';

const postData = [
  {
    id: "1",
    thumbnail: Thumbnail1,
    category: "education",
    title: "Troubles facing students",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit est ti pas dolor.",
    authorID: 1,
  },
  {
    id: "2",
    thumbnail: Thumbnail2,
    category: "science",
    title: "This is a title of the very second blog",
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita necessitatibus voluptates quam iusto officia architecto totam dolores magni quasi quas eum molestias sequi cum.',
    authorID: 2,
  },
  {
    id: "3",
    thumbnail: Thumbnail3,
    category: "art",
    title: "This is a title of the very third blog",
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe reprehenderit ut consequatur nihil quasi reiciendis eum repellat libero!',
    authorID: 3,
  },
  {
    id: "4",
    thumbnail: Thumbnail4,
    category: "business",
    title: "How to start a buisness",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
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