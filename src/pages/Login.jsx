import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Navbar from "./../shared/Navbar";
const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  console.log("location from login", location);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          toast.success("User Login Successful");
          console.log(user);
          location.state ? navigate(location.state) : navigate("/");
        }
      })
      .catch((error) => {
        setError(`${error.message}`);
      });
  };
  return (
    <div className="mx-auto">
      <Navbar />
      <div className="mt-[133px]">
        <div className="card shrink-0 w-3/4 mx-auto shadow-2xl bg-base-100  text-[#403F3F]">
          <h2 className="text-center text-[35px] font-semibold mt-[76px]">
            Login your account
          </h2>
          <div className="h-[1px] border-[1px] border-[#E7E7E7] w-3/4 mx-auto my-[50px]"></div>
          <form className="card-body w-3/4 mx-auto " onSubmit={handleLogin}>
            <div className="form-control space-y-5">
              <label className="label">
                <span className="label-text text-[#403F3F] text-[20px] font-semibold">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered w-full bg-[#F3F3F3]"
                required
              />
            </div>
            <div className="form-control space-y-5">
              <label className="label">
                <span className="label-text text-[#403F3F] text-[20px] font-semibold">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered bg-[#F3F3F3]"
                required
              />
              <label className="label">
                <Link to="" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline bg-[#403F3F] text-[#FFF]">
                Login
              </button>
              <div className="mt-[30px]">
                <p className="text-[#706F6F] text-[16px] font-semibold text-center">
                  Dont’t Have An Account ?{" "}
                  <span className="text-[#F75B5F]">
                    {" "}
                    <Link to="/register">Register</Link>{" "}
                  </span>
                </p>
              </div>
            </div>
            {error && <p className="text-red-600">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
