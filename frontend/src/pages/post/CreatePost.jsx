import { useState } from "react";
import { postCategories, modules, formats } from "../../utilities/data";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


const CreatePost = () => {

  const [title, setTitle] = useState('');
  const [description, setDesciption] = useState('');
  const [category, setCategory] = useState('Uncategorized');
  const [thumbnail, setThumbnail] = useState('');


  return (
    <div className="hero min-h-screen bg-[#0E1217]">
      <div className="w-full grid place-items-center">
        <div className="w-full grid place-items-center">
          <h1 className="text-center text-white text-2xl">Create Post</h1>

          <div className="card shrink-0 w-full max-w-sm  bg-transparent">
            <form className="card-body">
              <p className="self-start">this is an error message</p>

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
                className="select select-bordered w-full max-w-xs"
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
                className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                onChange={(e) => setThumbnail(e.target.files[0])}
                accept="png, jpg, jpeg"
              />

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost