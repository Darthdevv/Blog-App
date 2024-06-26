import { useState, useEffect, useContext } from "react";
import { postData } from "../../utilities/data"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { UserContext } from '../../context/userContext';





const DashBoard = () => {

  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const getMyPosts = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/posts/`
        );

        setPosts(data);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getMyPosts();
  },[])

  return (
    <div className="hero min-h-screen bg-[#0E1217]">
      <div className="container hero-content w-full px-20 text-center">
        <div className="w-full">
          {posts.length ? (
            posts.map((post) => (
              <div
                key={post.id}
                className=" w-full p-2 my-4 max-md:my-6 bg-[#1d1f26] border border-[#2D323C] hover:border-[#545A69] rounded-md"
              >
                <div className=" w-full flex items-center justify-between max-md:flex-wrap max-md:text-sm max-md:justify-center max-md:gap-y-2">
                  <div className="flex items-center justify-center gap-5">
                    <img
                      src={`http://localhost:5000/uploads/${post.thumbnail}`}
                      alt="thumbnail"
                      className="rounded-sm w-20"
                    />
                    <h5>{post.title}</h5>
                  </div>
                  <div>
                    <Link to={`/details/posts/${post._id}`}>
                      <button className="btn btn-custom max-sm:btn-md">
                        View
                      </button>
                    </Link>
                    <Link to={`/posts/${post._id}/edit`}>
                      <button className="btn btn-custom max-sm:btn-md mx-2 max-md:mx-1">
                        Edit
                      </button>
                    </Link>
                    <Link to={`/posts/${post._id}/delete`}>
                      <button className="btn btn-custom max-sm:btn-md">
                        Delete
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>You have no posts 🕵🏻‍♂️</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashBoard