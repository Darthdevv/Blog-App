import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { UserContext } from '../../context/userContext';
import DashBoardItem from "./DashBoardItem";
import ClipLoader from "react-spinners/ClipLoader";





const DashBoard = () => {

  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  const { currentUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMyPosts = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/posts/users/${id}`
        );

        setPosts(data);

        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getMyPosts();
  }, [id])

    if (loading) {
      return (
        <div className="hero min-h-screen bg-[#0E1217]">
          <div className="hero-content max-w-full">
            <div className="max-w-full">
              <ClipLoader color="#4F45E4" size={55} />
            </div>
          </div>
        </div>
      );
    }

  return (
    <div className="hero min-h-screen bg-[#0E1217]">
      <div className="container hero-content w-full px-20 text-center">
        <div className="w-full">
          {posts.length ? (
            posts.map((post) => (
              <DashBoardItem key={post._id} post={post} />
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