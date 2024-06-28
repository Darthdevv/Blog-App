import { useNavigate } from "react-router";
import {useFormik} from 'formik'
import { registerSchema } from "../../schemas";
import { useState } from "react";
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";

const Register = () => {

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
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: registerSchema,
      onSubmit: (values, actions) => {
        registerUser(values);
        actions.resetForm();
      },
    });

    async function registerUser(values) {
      setLoading(true);
      try {
        let response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/users/register`,
          values
        );
        const newUser = await response.data;
        if (!newUser) {
          setErrorMessage("Couldn't register user, Please try again.");
        }
        navigate("/login");
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
                Create an {"  "}
                <span className="logo-text ml-1">Inkify</span>
                {"  "} account
              </h1>
              <div className="form-control">
                <label htmlFor="name" className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name
                      ? "input input-bordered input-error"
                      : "input input-bordered"
                  }
                />
                {errors.name && touched.name ? (
                  <p className="error">{errors.name}</p>
                ) : (
                  ""
                )}
              </div>

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
              </div>

              <div className="form-control">
                <label htmlFor="confirmPassword" className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="confirm password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword
                      ? "input input-bordered input-error"
                      : "input input-bordered"
                  }
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <p className="error">{errors.confirmPassword}</p>
                ) : (
                  ""
                )}
                {errorMessage ? <p className="error">{errorMessage}</p> : ""}
                <label className="label text-sm">
                  Already have an account ?
                  <a
                    onClick={() => navigate("/login")}
                    className="label-text-alt ml-2 mr-auto link link-hover"
                  >
                    Login
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button
                  disabled={!(isValid && dirty)}
                  type="submit"
                  className="btn hover:bg-[#A5B4FB] hover:text-[#4F45E4] bg-[#4F45E4] text-[#A5B4FB]"
                >
                  {loading ? (
                    <ClipLoader color="#4F45E4" size={20} />
                  ) : (
                    "Register"
                  )}
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