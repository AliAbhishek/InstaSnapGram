import React, { useEffect, useState } from "react";
import logo from "../../assets/Images/google-hangouts.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { postUserDetails } from "../../utils/api/LoginAndSignup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation, useQuery } from "react-query";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../Firebase";


const auth = getAuth(app)

const Signup = () => {
  const navigate = useNavigate();
 
  
  const [userRegisterData, setuserRegisterData] = useState({
   
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const [borderError, setborderError] = useState(false);
  const [error, setError] = useState({
    nameerr: "",
    emailerr: "",
    usernameerr: "",
    passworderr: "",
  });

  const handlechange = (e) => {
    setuserRegisterData((old) => ({...old, [e.target.name]: e.target.value }));
    setError((old) => ({...old, [`${e.target.name}err`]: "" }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    validation();
  };

  const signupUser=()=>{
    createUserWithEmailAndPassword(auth,userRegisterData.email,userRegisterData.password).then((res)=>toast.success("User Registered Successfully")).catch((err)=>toast.error("Server not responding"))

  }

  // const postuserdata = useMutation(postUserDetails,{
  //   onSuccess: ()=>{
  //     toast.success("User Registered Successfully")
  //   },
  //   onError:()=>{
  //     toast.error("Something went wrong")
  //   }
    
  // })

  const validation = () => {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    let passwordRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
    let isvalid = true;
    let err = {
      nameerr: "",
      emailerr: "",
      usernameerr: "",
      passworderr: "",
    };

    if (!userRegisterData.name) {
      err.nameerr = "Please enter name";
      isvalid = false;
    }
    if (!userRegisterData.email) {
      err.emailerr = "Please enter email";
      isvalid = false;
    } else if (!emailRegex.test(userRegisterData.email)) {
      err.emailerr = "Please Enter Valid Email";
      isvalid = false;
    }
    if (!userRegisterData.password) {
      err.passworderr = "Please enter password";
      isvalid = false;
    } else if (!passwordRegex.test(userRegisterData.password)) {
      err.passworderr = "Please Enter Valid Password";
      isvalid = false;
    }
    if (!userRegisterData.username) {
      err.usernameerr = "Please enter username";
      isvalid = false;
    }
    if (!isvalid) {
      setError(err);
    }
    if (isvalid) {
      console.log(userRegisterData);
      // POST data using fetch

      // const res=fetch("https://instasnapgram-fc93c-default-rtdb.firebaseio.com/RegisteredUsers.json",
      // {
      //   method: "POST",
      //   headers:{
      //     "Content-type" : "application/json",
      //   },
      //   body:(
      //     JSON.stringify({
      //       name: userRegisterData.name,
      //       email:userRegisterData.email,
      //       username:userRegisterData.username,
      //       password:userRegisterData.password

      //     })
      //   )

      // }
      // )

      //POST DATA using Axios

      //  axios.post("https://instasnapgram-fc93c-default-rtdb.firebaseio.com/RegisteredUsers.json",{name: userRegisterData.name,
      //        email:userRegisterData.email,
      //        username:userRegisterData.username,
      //        password:userRegisterData.password})
      //        .then(res=>console.log(res))

      // postUserDetails(userRegisterData)
      //   .then((res) => {
      //     console.log(res, "res");
      //     toast.success("success");
      //   })
      //   .catch((err) => toast.error("Something went wrong"));

      // postuserdata.mutate(userRegisterData)
      signupUser()
     
      setuserRegisterData({ name: "", email: "", username: "", password: "" });
      
    }
  };

  return (
    <div>
      <ToastContainer />
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
              Create a new Account
            </h2>
            <h2 className="text-center text-yellow-300 text-sm">
              To use InstaSnapGram , Please enter your details
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
                  Name
                </label>
                <div class="mt-2">
                  <input
                    onChange={handlechange}
                    value={userRegisterData.name}
                    name="name"
                    type="text"
                    class={`block w-full rounded-md border-2 ${
                      borderError ? "border border-red-500" : null
                    } py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 p-2.5`}
                  />
                </div>
                <div className="text-yellow-300 text-sm">{error.nameerr}</div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label
                    for="password"
                    class="block text-sm font-medium leading-6 text-white"
                  >
                    Username
                  </label>
                  <div class="text-sm">
                    <a
                      href="#"
                      class="font-semibold text-yellow-300 hover:text-indigo-500"
                    ></a>
                  </div>
                </div>
                <div class="mt-2">
                  <input
                    value={userRegisterData.username}
                    name="username"
                    type="text"
                    onChange={handlechange}
                    class={`block w-full rounded-md border-2 ${
                      borderError ? "border border-red-500" : null
                    } py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 p-2.5`}
                  />
                </div>
                <div className="text-yellow-300 text-sm">
                  {error.usernameerr}
                </div>
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-white"
                >
                  Email
                </label>
                <div class="mt-2">
                  <input
                    name="email"
                    type="text"
                    value={userRegisterData.email}
                    onChange={handlechange}
                    class={`block w-full rounded-md border-2 ${
                      borderError ? "border border-red-500" : null
                    } py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-2.5`}
                  />
                </div>
                <div className="text-yellow-300 text-sm">{error.emailerr}</div>
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-white"
                >
                  Password
                </label>
                <div class="mt-2">
                  <input
                    value={userRegisterData.password}
                    name="password"
                    type="password"
                    onChange={handlechange}
                    class={`block w-full rounded-md border-2 ${
                      borderError ? "border border-red-500" : null
                    } py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-2.5`}
                  />
                </div>
                <div className="text-yellow-300 text-sm">
                  {error.passworderr}
                </div>
              </div>

              <div>
                <button class="flex w-full justify-center rounded-md bg-yellow-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Sign Up
                </button>
              </div>
            </form>

            <p class="mt-10 text-center text-sm text-white">
              Already have an account?
              <a
                onClick={() => navigate("/")}
                class="font-semibold leading-6 text-yellow-300 hover:text-indigo-500"
              >
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
