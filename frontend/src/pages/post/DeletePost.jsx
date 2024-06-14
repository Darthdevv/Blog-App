import { Link } from "react-router-dom";


const DeletePost = () => {
  return (
    <Link to={"/posts/werwer/delete"}>
      <button className="btn btn-ghost">Delete</button>
    </Link>
  );
}

export default DeletePost