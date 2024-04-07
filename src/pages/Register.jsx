import { useContext, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Navbar from "../shared/Navbar";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [checkError, setCheckError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    // const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, email, password);

    setCheckError("");
    setEmailError("");
    setError("");
    setPasswordError("");

    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
      setEmailError("email should example: example@gmail.com");
      return;
    }
    if (!/^(?=.*[A-Z])(?=.*[*#@])(?=.*\d).{6,}$/.test(password)) {
      setPasswordError(
        "password should have  6 length, one capital Letter, one special character like *#@ and end with number "
      );
      return;
    }

    if (!checked) {
      setCheckError("Please Accept Term's and Condition first");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          updateUser(name)
            .then(() => {})
            .catch((error) => {
              console.log(error.message);
            });
          toast.success("user create Successfully done");
          setError("");
          console.log(user);

          navigate("/login");
        }
      })
      .catch((error) => {
        // toast.error(`${error.message}`);
        setError(error.message);
        toast.error(`${error.message}`);
      });
  };

  return (
    <div className="mx-auto">
      <Navbar />
      <div className="mt-[133px]">
        <div className="card shrink-0 w-3/4 mx-auto shadow-2xl bg-base-100  text-[#403F3F]">
          <h2 className="text-center text-[35px] font-semibold mt-[76px]">
            Register your account
          </h2>
          <div className="h-[1px] border-[1px] border-[#E7E7E7] w-3/4 mx-auto my-[50px]"></div>
          <form className="card-body w-3/4 mx-auto " onSubmit={handleRegister}>
            <div className="form-control space-y-5">
              <label className="label">
                <span className="label-text text-[#403F3F] text-[20px] font-semibold">
                  Name
                </span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered w-full bg-[#F3F3F3]"
                required
              />
            </div>
            <div className="form-control space-y-5">
              <label className="label">
                <span className="label-text text-[#403F3F] text-[20px] font-semibold">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                placeholder="photo URL"
                name="phot-url"
                className="input input-bordered w-full bg-[#F3F3F3]"
              />
            </div>
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
            {emailError && <p className="text-red-600">{emailError}</p>}
            <div className="form-control space-y-5 relative ">
              <label className="label">
                <span className="label-text text-[#403F3F] text-[20px] font-semibold">
                  Password
                </span>
              </label>

              <input
                type={`${show ? "text" : "password"}`}
                name="password"
                placeholder="password"
                className="input input-bordered bg-[#F3F3F3]"
                required
              />
              {show ? (
                <LuEye
                  onClick={() => setShow(!show)}
                  className="absolute top-11 right-6 cursor-pointer"
                  size={30}
                />
              ) : (
                <LuEyeOff
                  onClick={() => setShow(!show)}
                  className="absolute top-11 right-6 cursor-pointer"
                  size={30}
                />
              )}

              {passwordError && (
                <p className="text-red-600 text-[12px] font-semibold">
                  {passwordError}
                </p>
              )}
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onClick={() => setChecked(!checked)}
                  />
                  <span className="label-text text-left">
                    Accept Terms & Conditions
                  </span>
                </label>
                {checkError && (
                  <p className="text-red-600 font-medium">{checkError}</p>
                )}
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline bg-[#403F3F] text-[#FFF]">
                Register
              </button>
              <div className="mt-[30px]">
                <p className="text-[#706F6F] text-[16px] font-semibold text-center">
                  Already Have An Account ?{" "}
                  <span className="text-[#F75B5F]">
                    {" "}
                    <Link to="/login">Login Here</Link>{" "}
                  </span>
                </p>
              </div>
            </div>
            {error && (
              <div className="text-center">
                {" "}
                <p className="text-red-600">{error}</p>{" "}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
