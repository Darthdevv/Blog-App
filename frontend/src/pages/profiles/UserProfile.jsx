import { useState, useEffect, useContext } from 'react';
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import BackTo from '../../components/Button/BackHome';
import { UserContext } from '../../context/userContext';
import axios from 'axios';
import { useNavigate } from 'react-router';

const UserProfile = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const token = currentUser?.token;
  const currentAvatar = currentUser?.avatar;
  const [avatar, setAvatar] = useState(currentAvatar);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");
  const [isAvatarTouched, setIsAvatarTouched] = useState(false);

    useEffect(() => {
      const getCurrentUser = async () => {
        try {
          const { data } = await axios.get(
            `http://localhost:5000/api/users/${currentUser.id}`
          );

          setAvatar(data.avatar);
          setEmail(data.email);
          setName(data.name);

          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };

      getCurrentUser();
    }, []);


  const changeAvatarHandler = async () => {
    setIsAvatarTouched(false);
    try {
      const postData = new FormData();
      postData.set("avatar", avatar);
      const response = await axios.post(
        `http://localhost:5000/api/users/change-avatar`,
        postData,
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setAvatar(response?.data.avatar);

    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  }

  const updateUserProfile = async (e) => {
    e.preventDefault();

    try {
      const userData = new FormData();

      userData.set("name", name);
      userData.set("email", email);
      userData.set("currentPassword", currentPassword);
      userData.set("newPassword", newPassword);
      userData.set("confirmNewPassword", confirmNewPassword);

      const data = await axios.patch(
        `http://localhost:5000/api/users/edit-user`,
        userData,
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (data.status == 200) {
        navigate("/logout");
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  }

  return (
    <div className="hero min-h-screen relative bg-[#0E1217]">
      <div className="absolute top-5 left-5">
        <BackTo children={"View Posts"} to={`/myposts/${currentUser.id}`} />
      </div>
      <div className="w-full grid place-items-center my-20">
        <div className=" w-full grid place-items-center">
          <div className="avatar">
            <div className="w-32 rounded-full ring ring-[#4F45E4] ring-offset-base-100 ring-offset-2">
              <img
                src={`http://localhost:5000/uploads/${avatar}`}
                className="relative"
              />
              <input
                type="file"
                id="edit-btn"
                accept="jpg, png, jpeg"
                onChange={(e) => setAvatar(e.target.files[0])}
                hidden
              />
              <label
                onClick={() => setIsAvatarTouched(true)}
                htmlFor="edit-btn"
                className=" absolute bottom-1 right-[-18px] btn btn-circle btn-custom border-none"
              >
                <FaEdit color="white" />
              </label>
            </div>
            {isAvatarTouched && (
              <button
                className=" absolute bottom-1 right-[-18px] btn btn-circle btn-custom border-none"
                onClick={changeAvatarHandler}
              >
                <FaCheck color="white" />
              </button>
            )}
          </div>

          <h1 className="text-white text-2xl mt-5">{currentUser?.name}</h1>

          <div className="card w-full lg:w-[600px] md:w-[500px] sm:w-[400px] shadow-2xl bg-transparent">
            <form className="card-body" onSubmit={updateUserProfile}>
              {error && <p className="self-start error">{error}</p>}

              <div className="form-control">
                <input
                  type="text"
                  placeholder="username"
                  className="input input-bordered"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                />
              </div>

              <div className="form-control">
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-control">
                <input
                  type="password"
                  placeholder="current password"
                  className="input input-bordered"
                  name="currentPassword"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>

              <div className="form-control">
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>

              <div className="form-control">
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                  name="confirmNewPassword"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
              </div>

              <div className="form-control mt-6 mx-auto">
                <button
                  type="submit"
                  className="btn hover:bg-[#A5B4FB] hover:text-[#4F45E4] bg-[#4F45E4] text-[#A5B4FB] w-[200px]"
                >
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