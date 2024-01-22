import React, { useState } from "react";
import logo from "../../assets/Images/google-hangouts.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    emailerr: "",
    passworderr: "",
  });
  const [isLoading, setisLoading] = useState(falses);
  const [borderError, setborderError] = useState(false);

  const handlechange = (e) => {
    setuserData((old) => ({ ...old, [e.target.name]: e.target.value }));
    setError((old) => ({ ...old, [`${e.target.name}err`]: "" }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    validation();
  };

  const validation = () => {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    let passwordRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
    let isvalid = true;
    let err = {
      emailerr: "",
      passworderr: "",
    };
    if (!userData.email) {
      err.emailerr = "Please Enter Email";
      isvalid = false;
    } else if (!emailRegex.test(userData.email)) {
      err.emailerr = "Please Enter Valid Email";
      isvalid = false;
    }

    if (!userData.password) {
      err.passworderr = "Please Enter Password";
      isvalid = false;
    } else if (!passwordRegex.test(userData.password)) {
      err.passworderr = "Please Enter Valid Password";
      isvalid = false;
    }

    if (!isvalid) {
      setError(err);
    }
    if (isvalid) {
      console.log(userData);
      setuserData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-center items-center gap-2 ">
            <img class=" h-10 " src={logo} alt="Your Company" />{" "}
            <div className="flex">
              <p className="text-2xl text-white">Insta</p>
              <p className="text-2xl text-yellow-300">Snap</p>
              <p className="text-2xl text-white">Gram</p>
            </div>
          </div>

          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
          <h2 className="text-center text-yellow-300 text-sm">
            Welcome Back please enter your details
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handlesubmit}
            class="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-white"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                  onChange={handlechange}
                  value={userData.email}
                  name="email"
                  type="text"
                  class={`block w-full rounded-md border-2 ${
                    borderError ? "border border-red-500" : null
                  } py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-2.5`}
                />
              </div>
              <div className="text-yellow-300 text-sm">{error.emailerr}</div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-white"
                >
                  Password
                </label>
                <div class="text-sm">
                  <a
                    href="#"
                    class="font-semibold text-yellow-300 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div class="mt-2">
                <input
                  onChange={handlechange}
                  value={userData.password}
                  id="password"
                  name="password"
                  type="password"
                  class={`block w-full rounded-md border-2  ${
                    borderError ? "border border-red-500" : null
                  } py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2.5`}
                />
              </div>
              <div className="text-yellow-300 text-sm">{error.passworderr}</div>
            </div>

            <div>
              <button class="flex w-full justify-center rounded-md bg-yellow-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {isLoading ? (
                  <div
                    class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-warning motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                  >
                    <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                      Loading...
                    </span>
                  </div>
                ) : (
                  " Sign in"
                )}
              </button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-white">
            Don't have an account?
            <a
              onClick={() => navigate("/signup")}
              class="font-semibold leading-6 text-yellow-300 hover:text-indigo-500"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
