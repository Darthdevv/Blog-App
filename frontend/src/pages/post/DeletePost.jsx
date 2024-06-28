import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const DeletePost = ({ postId : id , color }) => {

  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  const removePost = async (id) => {
    try {
      const data = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/posts/${id}`,
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (data.status == 204) {
        if (location.pathname == `/myposts/${currentUser.id}`) {
          navigate(0);
        } else {
          navigate("/");
        }
        console.log("Post deleted successfully.");
      }
    } catch (error) {
      console.log("Couldn't delete post", error);
    }
  }

  return (
    <Link>
      <button
        onClick={() => removePost(id)}
        className={color}
      >
        Delete
      </button>
    </Link>
  );
}

export default DeletePost