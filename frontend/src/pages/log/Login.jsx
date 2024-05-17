import { useNavigate } from "react-router";
import { loginSchema } from "../../schemas";
import { useFormik } from "formik";

const Login = () => {

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
          Email: "",
          Password: "",
        },
        validationSchema: loginSchema,
        onSubmit: (values, actions) => {
          console.log(values);
          actions.resetForm();
        },
      });

    // async function sendDataToApi(values) {
    //   setLoading(true);
    //   try {
    //     let { data } = await axios.post(
    //       "https://ecommerce.routemisr.com/api/v1/auth/signin",
    //       values
    //     );
    //     if (data.message == "success") {
    //       localStorage.setItem("token", data.token);
    //       navigate("/");
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
              <h1 className=" text-white font-bold text-2xl">
                Login to <span className="text-[#4F45E4] ml-1">Ink</span>
                <span className="text-[#A5B4FB] mr-1">Well</span>
              </h1>
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
                  <label className="label">
                    <a className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
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
                {/* {errorMessage ? <p className="error">{errorMessage}</p> : ""} */}
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
                  Login
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