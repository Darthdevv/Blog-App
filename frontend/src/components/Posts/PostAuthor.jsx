import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

const PostAuthor = ({ creator, createdAt }) => {

  const [author, setAuthor] = useState({});

  useEffect(() => {
    const getAuthor = async () => {
      try {
        const { data } = await axios.get(
          `https://blog-app-production-6e12.up.railway.app/api/users/${creator}`
        );
        setAuthor(data);

      } catch (error) {
        console.log(error)
      }
    }

    getAuthor();
  },[])

  return (
    <Link to={`/posts/users/${creator}`}>
      <div className=" c gap-3">
        <figure className="w-[30px]">
          <img
            src={`http://localhost:5000/uploads/${author?.avatar}`}
            alt="avatar"
            className=" rounded-md"
          />
        </figure>
        <div>
          <h5 className="text-[12px] text-nowrap -mb-1">By: {author?.name}</h5>
          <small className="text-[10px] text-nowrap">
            <ReactTimeAgo date={new Date(createdAt)} locale="en-US" />
          </small>
        </div>
      </div>
    </Link>
  );
}

export default PostAuthor