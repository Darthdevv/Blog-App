import { useNavigate } from "react-router";
import { loginSchema } from "../../schemas";
import { useFormik } from "formik";
import { useState, useContext } from "react";
import { UserContext } from "../..//context/userContext";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {

  const { setCurrentUser } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

      const {
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
        values,
        errors,
        dirty,
        isValid,
      } = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: loginSchema,
        onSubmit: (values, actions) => {
          loginUser(values);
          actions.resetForm();
        },
      });

    async function loginUser(values) {
      setLoading(true);
      try {
        let response = await axios.post(
          `http://localhost:5000/api/users/login`,
          values
        );
        const loggedUser = await response.data;
        if (!loggedUser) {
          setErrorMessage("Couldn't login, Please try again.");
        }
        navigate("/");
        setCurrentUser(loggedUser);
      } catch (error) {
        setLoading(false);
        setErrorMessage(error.response.data.message);
      }
    }

  return (
    <div className="hero min-h-screen bg-[#0E1217]">
      <div className="hero-content text-center">
        <div className="max-w-full">
          <div className=" bg-[#1D1F25] border border-[#545A69] card w-[600px] max-lg:w-[500px]  max-sm:w-[300px] shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body w-full">
              <h1 className="text-white font-bold text-2xl">
                Login to {"  "}
                <span className="logo-text ml-1">Inkify</span>
              </h1>
              <div className="form-control">
                <label htmlFor="email" className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? "input input-bordered input-error"
                      : "input input-bordered"
                  }
                />
                {errors.email && touched.email ? (
                  <p className="error">{errors.email}</p>
                ) : (
                  ""
                )}
              </div>

              <div className="form-control">
                <label htmlFor="password" className="label">
                  <span className="label-text">Password</span>
                  <label className="label">
                    <a className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password
                      ? "input input-bordered input-error"
                      : "input input-bordered"
                  }
                />
                {errors.password && touched.password ? (
                  <p className="error">{errors.password}</p>
                ) : (
                  ""
                )}
                {errorMessage ? <p className="error">{errorMessage}</p> : ""}
                <label className="label text-sm">
                  Don't have an account ?
                  <a
                    onClick={() => navigate("/register")}
                    className="label-text-alt ml-2 mr-auto link link-hover"
                  >
                    Register
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button
                  disabled={!(isValid && dirty)}
                  type="submit"
                  className="btn hover:bg-[#A5B4FB] hover:text-[#4F45E4] bg-[#4F45E4] text-[#A5B4FB]"
                >
                  {loading ? <ClipLoader color="#4F45E4" size={20} /> : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login