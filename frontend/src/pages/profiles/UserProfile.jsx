import { useState } from 'react';
import Avatar from '../../images/avatar2.jpg'
import { FaEdit } from "react-icons/fa";
import BackTo from '../../components/Button/BackHome';

const UserProfile = () => {

  const [avatar, setAvatar] = useState('');

  return (
    <div className="hero min-h-screen relative bg-[#0E1217]">
      <div className="absolute top-5 left-5">
        <BackTo children={"View Posts"} to={"/myposts:id"} />
      </div>
      <div className="hero-content text-center">
        <div className="max-w-full">
          <div className="avatar">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={Avatar} className="relative" />
              <input
                type="file"
                id="edit-btn"
                accept="jpg, png, jpeg"
                onChange={(e) => setAvatar(e.target.value[0])}
                hidden
              />
              <label
                htmlFor="edit-btn"
                className=" absolute bottom-1 right-[-18px] btn btn-circle btn-ghost"
              >
                <FaEdit color="white" />
              </label>
            </div>
          </div>

          <h1 className="text-white text-2xl mt-5">Yousef Elgohary</h1>

          <div className="card shrink-0 lg:w-[600px] md:w-[500px] sm:w-[400px] shadow-2xl bg-transparent">
            <form className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="username"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <input
                  type="password"
                  placeholder="current password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6 mx-auto">
                <button className="btn hover:bg-[#A5B4FB] hover:text-[#4F45E4] bg-[#4F45E4] text-[#A5B4FB] w-[200px]">
                  Update <span className="mr-2">Details</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile