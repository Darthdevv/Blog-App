import { Link } from "react-router-dom";
import Avatar from "../../images/avatar3.jpg";
import { useEffect, useState } from "react";
import axios from 'axios';

const PostAuthor = ({ creator, createdAt }) => {

  const [author, setAuthor] = useState({});

  useEffect(() => {
    const getAuthor = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/users/${creator}`);
        setAuthor(data);
      } catch (error) {
        console.log(error)
      }
    }

    getAuthor();
  },[])

  return (
    <Link to={"/posts/users/dd"}>
      <div className=" c gap-3">
        <figure className="w-[30px]">
          <img
            src={`http://localhost:5000/uploads/${author?.avatar}`}
            alt="avatar"
            className=" rounded-md"
          />
        </figure>
        <div>
          <h5 className="text-[12px] text-nowrap -mb-1">By: Yousef Elgohary</h5>
          <small className="text-[10px] text-nowrap">Just Now</small>
        </div>
      </div>
    </Link>
  );
}

export default PostAuthor