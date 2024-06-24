import { useState, useContext } from "react";
import { postCategories, modules, formats } from "../../utilities/data";
import ReactQuill from "react-quill";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router";
import { UserContext } from "../../context/userContext";



const EditPost = () => {

  const [title, setTitle] = useState("");
  const [description, setDesciption] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [thumbnail, setThumbnail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const { id } = useParams();

  const updatePost = async (e) => {
    e.preventDefault();

    const postData = new FormData();

    postData.set("title", title);
    postData.set("description", description);
    postData.set("category", category);
    postData.set("thumbnail", thumbnail);

    try {
      const data = await axios.patch(
        `http://localhost:5000/api/posts/${id}`,
        postData,
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log(data);

      if (data.status == 200) {
        return navigate("/");
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="hero min-h-screen my-20 bg-[#0E1217]">
      <div className="w-full grid place-items-center">
        <div className="w-full grid place-items-center">
          <h1 className="text-center text-white text-2xl">Edit Post</h1>

          <div className="card  w-full lg:w-[600px] md:w-[500px] sm:w-[400px] shadow-2xl  bg-transparent">
            <form className="card-body" onSubmit={updatePost}>
              {error && <p className="self-start error">{error}</p>}

              <div className="form-control">
                <input
                  type="text"
                  placeholder="title"
                  className="input input-bordered"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  autoFocus
                />
              </div>

              <select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="select select-bordered w-full "
              >
                {postCategories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>

              <ReactQuill
                modules={modules}
                formats={formats}
                value={description}
                onChange={setDesciption}
              />

              <input
                type="file"
                className="file-input file-input-bordered file-input-primary w-full "
                onChange={(e) => setThumbnail(e.target.files[0])}
                accept="png, jpg, jpeg"
              />

              <div className="form-control mt-6 mx-auto">
                <button
                  type="submit"
                  className="btn hover:bg-[#A5B4FB] hover:text-[#4F45E4] bg-[#4F45E4] text-[#A5B4FB] w-[200px]"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
