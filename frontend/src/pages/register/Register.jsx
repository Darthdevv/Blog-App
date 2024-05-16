import { useNavigate } from "react-router";

const Register = () => {

  const navigate = useNavigate();

  return (
    <div className="hero min-h-screen bg-[#0E1217]">
      <div className="hero-content text-center">
        <div className="max-w-full">
          <div className=" bg-[#1D1F25] border border-[#545A69] card w-[600px] max-lg:w-[500px]  max-sm:w-[300px] shadow-2xl">
            <form className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                  required
                />
                <label className="label text-sm">
                  Already have an account ?
                  <a onClick={() => navigate('/login')} className="label-text-alt ml-2 mr-auto link link-hover">
                    Login
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn hover:bg-[#A5B4FB] hover:text-[#4F45E4] bg-[#4F45E4] text-[#A5B4FB]">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register