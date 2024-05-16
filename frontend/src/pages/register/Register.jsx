import { useNavigate } from "react-router";
import {useFormik} from 'formik'
import { registerSchema } from "../../schemas";
import { useState } from "react";

const Register = () => {

    // const [errorMessage, setErrorMessage] = useState("");
    // const [loading, setLoading] = useState(false);
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
        Name: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
      },
      validationSchema: registerSchema,
      onSubmit: (values, actions) => {
        console.log(values);
        actions.resetForm();
      },
    });

    // async function sendDataToApi(values) {
    //   setLoading(true);
    //   try {
    //     let { data } = await axios.post(
    //       "https://ecommerce.routemisr.com/api/v1/auth/signup",
    //       values
    //     );
    //     if (data.message == "success") {
    //       navigate("/login");
    //     }
    //   } catch (error) {
    //     setLoading(false);
    //     setErrorMessage(error.response.data.message);
    //   }
    // }

  return (
    <div className="hero min-h-screen bg-[#0E1217]">
      <div className="hero-content text-center">
        <div className="max-w-full">
          <div className=" bg-[#1D1F25] border border-[#545A69] card w-[600px] max-lg:w-[500px]  max-sm:w-[300px] shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body w-full">
              <div className="form-control">
                <label htmlFor="Name" className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  id="Name"
                  name="Name"
                  type="text"
                  placeholder="name"
                  value={values.Name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.Name && touched.Name
                      ? "input input-bordered input-error"
                      : "input input-bordered"
                  }
                />
                {errors.Name && touched.Name ? (
                  <p className="error">{errors.Name}</p>
                ) : (
                  ""
                )}
              </div>

              <div className="form-control">
                <label htmlFor="Email" className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  id="Email"
                  name="Email"
                  type="email"
                  placeholder="email"
                  value={values.Email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.Email && touched.Email
                      ? "input input-bordered input-error"
                      : "input input-bordered"
                  }
                />
                {errors.Email && touched.Email ? (
                  <p className="error">{errors.Email}</p>
                ) : (
                  ""
                )}
              </div>

              <div className="form-control">
                <label htmlFor="Password" className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  id="Password"
                  name="Password"
                  type="password"
                  placeholder="password"
                  value={values.Password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.Password && touched.Password
                      ? "input input-bordered input-error"
                      : "input input-bordered"
                  }
                />
                {errors.Password && touched.Password ? (
                  <p className="error">{errors.Password}</p>
                ) : (
                  ""
                )}
              </div>

              <div className="form-control">
                <label htmlFor="ConfirmPassword" className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  id="ConfirmPassword"
                  name="ConfirmPassword"
                  type="password"
                  placeholder="confirm password"
                  value={values.ConfirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.ConfirmPassword && touched.ConfirmPassword
                      ? "input input-bordered input-error"
                      : "input input-bordered"
                  }
                />
                {errors.ConfirmPassword && touched.ConfirmPassword ? (
                  <p className="error">{errors.ConfirmPassword}</p>
                ) : (
                  ""
                )}
                {/* {errorMessage ? <p className="error">{errorMessage}</p> : ""} */}
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