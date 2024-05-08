import React from 'react'
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
  return (
    <div>Posts</div>
  )
}

export default Posts