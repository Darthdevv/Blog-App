import { useState, useEffect, useContext } from 'react';
import { UserContext } from "../..//context/userContext";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import PostAuthor from '../../components/Posts/PostAuthor';
import { AiOutlineClose } from "react-icons/ai";
import DeletePost from './DeletePost';
import ClipLoader from 'react-spinners/ClipLoader';
import axios from 'axios';

const PostDetails = () => {

  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);

  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://blog-app-production-6e12.up.railway.app/api/posts/${id}`
        );

        console.log(data)
        setPost(data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally  {
        setLoading(false);
      }
    }

    getPost();
  },[])


  if (Loading) {
    return (
      <div className=" py-20 hero min-h-screen bg-[#5045e42d]">
        <div className="hero-content text-start text-neutral-content">
          <div className="max-w-full">
            <ClipLoader color="#4F45E4" size={55} />;
          </div>
        </div>
      </div>
    );
  }

  const handleOuterClick = () => {
    location.pathname != `/myposts/${currentUser.id}` ? navigate(-1) : navigate(0);
  };

  const handleInnerClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      onClick={handleOuterClick}
      className=" py-20 hero min-h-screen bg-[#5045e42d]"
    >
      {error && <p className="self-start error">{error}</p>}
      {post && (
        <div
          onClick={handleInnerClick}
          className="hero-content text-start text-neutral-content"
        >
          <div className="max-w-full">
            <div className="card max-w-[1000px] max-sm:w-[350px]  bg-[#0E1217] border border-[#545A69] hover:border-[#545A69] shadow-xl">
              <div className=" py-5 px-10 flex items-start justify-between">
                <PostAuthor creator={post.creator} createdAt={post.createdAt} />
                <div className="flex items-center justify-between gap-2">
                  {currentUser?.id === post?.creator && (
                    <>
                      <Link to={`/posts/${post?._id}/edit`}>
                        <button
                          onClick={handleInnerClick}
                          className="btn btn-ghost"
                        >
                          Edit
                        </button>
                      </Link>
                      <DeletePost
                        onClick={handleInnerClick}
                        postId={id}
                        color={"btn btn-ghost"}
                      />
                    </>
                  )}
                  <Link>
                    <button
                      onClick={handleOuterClick}
                      className="btn btn-circle btn-ghost"
                    >
                      <AiOutlineClose />
                    </button>
                  </Link>
                </div>
              </div>
              <figure className="px-10 pt-10">
                <img
                  src={`https://blog-app-production-6e12.up.railway.app/uploads/${post.thumbnail}`}
                  alt="thumbnail"
                  className="rounded-xl w-full h-auto max-w-full"
                />
              </figure>
              <div className="card-body items-center text-start">
                <h2 className="card-title">{post.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: post.description }}></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostDetails