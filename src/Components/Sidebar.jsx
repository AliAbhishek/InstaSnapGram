import React, { useEffect, useState } from "react";

import profilePic from "../../src/assets/Images/pi.jpg";
import { FaHome, FaPeopleCarry, FaSave } from "react-icons/fa";
import { FaWpexplorer } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Sidebar = ({ userEmail }) => {
  const navigate = useNavigate();
  const [image,setImage]= useState(false)
 
  // const useremail = useSelector((state) => state.loginReducer);
  
  const auth = getAuth();
  const [currentUser, setcurrentUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setcurrentUser(user);
    });
  }, []);

  useEffect(()=>{
    if(currentUser?.photoURL){
      setImage(true)

    }
  },[currentUser])

  
    let userName = currentUser?.email.split("");

    let i = currentUser?.email.indexOf("1"||"2"||"3"||"5"||"4"||"6"||"7"||"8"||"9"||"0"||"@");
    let newUserName = userName?.slice(0, i);

    let result = newUserName?.join("");
    // setUname(result);
    console.log(result)
    
   console.log(currentUser?.photoURL,"picture")
   console.log(currentUser?.displayName,"naem")
  // console.log(Uname)

  return (
    <div className="w-1/2 h-full text-sm">
      <div>
        <div className="flex gap-3 items-center ml-10 mt-5">
          <div className=" ">
            

            {image ? <img className="h-12 w-12 rounded-full" src={currentUser?.photoURL} alt="avatar" />:<img className="h-12 w-12 rounded-full" src={profilePic} alt="avatar" />}
          </div>
          <div>
            <div className="text-xl font-bold ">
              {currentUser ? currentUser.displayName ? currentUser.displayName:result : null}
            </div>
            <div className="text-xs  ">
              {currentUser ? currentUser.email : result}
            </div>
          </div>
        </div>

        <div
          onClick={() => navigate("/content/home")}
          className="text-yellow-500 cursor-pointer"
        >
          <div className="flex gap-3 mt-5 items-center ml-12 p-2 hover:bg-yellow-500 hover:rounded-sm  hover:text-white">
            <div className="text-xl">
              <FaHome />
            </div>
            <div className="text-xl text-white">Home</div>
          </div>
        </div>

        <div
          onClick={() => navigate("/content/explore")}
          className="text-yellow-500 cursor-pointer"
        >
          <div className="flex gap-3 mt-1 items-center ml-12 p-2 hover:bg-yellow-500 hover:rounded-sm hover:text-white">
            <div className="text-xl ">
              <FaWpexplorer />
            </div>
            <div className="text-xl text-white">Explore</div>
          </div>
        </div>

        <div
          onClick={() => navigate("/content/people")}
          className="text-yellow-500 cursor-pointer"
        >
          <div className="flex gap-3 mt-1 items-center ml-12 p-2 hover:bg-yellow-500 hover:rounded-sm hover:text-white">
            <div className="text-xl ">
              <FaPeopleCarry />
            </div>
            <div className="text-xl text-white">People</div>
          </div>
        </div>

        <div
          onClick={() => navigate("/content/saved")}
          className="text-yellow-500 cursor-pointer"
        >
          <div className="flex gap-3 mt-1 items-center ml-12 p-2 hover:bg-yellow-500 hover:rounded-sm hover:text-white">
            <div className="text-xl ">
              <FaSave />
            </div>
            <div className="text-xl text-white">Saved</div>
          </div>
        </div>

        <div
          onClick={() => navigate("/content/create")}
          className="text-yellow-500 cursor-pointer"
        >
          <div className="flex gap-3 mt-1 items-center ml-12 p-2 hover:bg-yellow-500 hover:rounded-sm hover:text-white">
            <div className="text-xl ">
              <MdCreateNewFolder />
            </div>
            <div className="text-xl text-white">Create</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
